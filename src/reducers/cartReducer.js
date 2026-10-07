// 1. initialCart, define o estado inicial do carrinho.
// um array vazio ([]), já que o usuário começa na loja sem nenhum item
export const initialCart = [];

// 2. cartReducer, é uma função exigida pelo hook useReducer do React.
// a única responsável por decidir como o estado do carrinho muda
// recebe sempre dois param
// - state, o estado atual do carrinho (como a lista de produtos estáo
// - action, um objeto enviado pela tela descrevendo o que o usuário quer fazer
//   Padrão: { type: 'TIPO_DA_ACAO', payload: dados_enviados }
export function cartReducer(state, action) {
  // AÇÃO 1: Adicionar um produto
  if (action.type === "ADD") {
    // imutabilidade
    // React não detecta mutação direta,
    // o operador spread [...state, action.payload] cria um novo array,
    // copiando tudo o que já tinha no carrinho e inserindo o novo produto no final
    return [...state, action.payload];
  }

  // AÇÃO 2: Remover um produto pelo ID
  if (action.type === "REMOVE") {
    // método filter() do JS cria um novo array contendo apenas os itens que
    // satisfazem a condição (ou seja, id é DIFERENTE do id recebido)
    // O item que tiver o mesmo id fica de fora
    return state.filter((item) => item.id !== action.payload);
  }

  // AÇÃO 3: Limpar todos os itens
  if (action.type === "CLEAR") {
    // Retorna array vazio
    return [];
  }

  // se dispatch dispara uma ação desconhecida, retorna o estado atual
  // sem modificar
  return state;
}
