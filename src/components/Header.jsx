import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import do módulo do React, responsável por utilizar componentes
// do próprio React.
// import dos componentes do MUI, responsável pela UI do Header:
// import do ícone do carrinho:

export default function Header({ cartCount, onOpenCart }) {
    return (
        // AppBar, componente do MUI para barras de navegação
        // fica fixa quando usado static
        <AppBar position="static">
            {/* Toolbar: componente do MUI para barras de navegação */}
            <Toolbar>
                {/* 1. Typography, componente do MUI para textos
                // variant="h6", define um tamanho e peso preset
                // 2. sx, Style Extension.. é como o MUI aplica CSS direto
                // no componente; é o style mas com mais recursos
                // flexGrow: 1, faz o componente crescer e ocupar todo 
                // o espaço disponivel
                */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Amazood
                </Typography>

                {/*// sequência de componentes MUI,
                // o inherit faz com que o botão receba a cor do
                // componente pai, como a cor do texto da barra é branca,
                // vai ser branco 
                */}
                <IconButton color="inherit" onClick={onOpenCart}>
                    <Badge badgeContent={cartCount} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}