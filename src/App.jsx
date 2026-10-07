// imports dos hooks fundamentais do React
// - useState: re-render com variáveis
// - useEffect: executa efeitos colaterais (como buscar dados na internet ao abrir a página)
// - useReducer: o hook avançado exigido no edital para gerenciar regras de estado complexas
import React, { useState, useEffect, useReducer } from 'react';
// imports dos componentes estruturais do Material UI
// - Container: centraliza o conteúdo na tela e coloca margens automáticas nas laterais
// - Grid: o sistema de layout responsivo de 12 colunas do MUI
// - CircularProgress: o círculo animado de "carregando" (spinner)
// - Box: a <div> do Material UI que aceita estilos via sx
// - Typography: o componente padronizado de textos do MUI
import { Container, Grid, CircularProgress, Box, Typography } from '@mui/material';
// camada de serviço (chamada AJAX)
import { fetchProducts } from './services/api';
// import do redutor e do estado inicial do carrinho
import { cartReducer, initialCart } from './reducers/cartReducer';
// import dos componentes
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';

export default function App() {
  // --- ESTADOS---
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // --- HOOK (useReducer) ---
  // - cart: o array com os itens
  // - dispatch: disparar ações para o cartReducer
  const [cart, dispatch] = useReducer(cartReducer, initialCart);


  // --- CICLO DE VIDA E AJAX (useEffect) ---
  // O useEffect roda após o componente ser montado na tela.
  // O array de dependências vazio [] no final, indica só uma execução
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true); // carregamento

        const data = await fetchProducts(); // chama API

        setProducts(data); // guarda os produtos no estado
      } catch (err) {
        setError('Falha ao conectar com o servidor da FakeStore.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);


  // --- RENDERIZAÇÃO DA INTERFACE (JSX) ---
  return (
    <>
      {/* 1. Header: props para o filho:
          - cartCount: a quantidade atual de itens (cart.length)
          - onOpenCart: função que atualiza o estado isDrawerOpen para true
      */}
      <Header
        cartCount={cart.length}
        onOpenCart={() => setIsDrawerOpen(true)}
      />

      {/* 2. Container: my: 4 aplica margem superior e inferior de 32px */}
      <Container sx={{ my: 4 }}>

        {/* Renderização Condicional com &&:
            exibe o spinner centralizado na tela */}
        {loading && (
          <Box display="flex" justifyContent="center" my={5}>
            <CircularProgress />
          </Box>
        )}

        {/* mensagem de erro, exibe o texto em vermelho */}
        {error && (
          <Typography color="error" align="center" variant="h6">
            {error}
          </Typography>
        )}

        {/* se NÃO estiver carregando e NÃO houver erro, renderiza a grade de produtos */}
        {!loading && !error && (
          // Grid container, sistema de 12 colunas.
          // spacing={3}: define um espaço de 24px entre os cards
          <Grid container spacing={3}>
            {/* .map() do JS percorre a lista de produtos e gera um card para cada um */}
            {products.map((product) => (
              // Grid item: cada coluna individual da grade
              // key={product.id}: OBRIGATÓRIO no React para o Virtual DOM rastrear cada item
              // xs={12}: em telas de celular (extra-small), ocupa 12 colunas (largura toda)
              // sm={6}: em tablets (small), ocupa 6 colunas (metade da tela, 2 por linha)
              // md={3}: em computadores (medium), ocupa 3 colunas (1/4 da tela, 4 por linha)
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <ProductCard
                  product={product}
                  // onAddToCart: passa uma função que dispara a ação 'ADD' no reducer
                  onAddToCart={(prod) => dispatch({ type: 'ADD', payload: prod })}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>


      {/* props necessárias para o CartDrawer (gaveta):
          - isOpen: o estado boolean que diz se abre ou fecha
          - onClose: função para fechar a gaveta
          - cart: a lista de itens gerenciada pelo reducer
          - onRemove: função que dispara a ação 'REMOVE' com o id do item
          - onClear: função que dispara a ação 'CLEAR'
      */}
      <CartDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cart={cart}
        onRemove={(id) => dispatch({ type: 'REMOVE', payload: id })}
        onClear={() => dispatch({ type: 'CLEAR' })}
      />
    </>
  );
}