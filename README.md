# Amazood, Marketplace internacional

Aluno: João Marcelo Alves Müller

Projeto 1 da disciplina de **Programação Web Fullstack**.  
Desenvolvimento da camada Frontend de uma aplicação web com **React.js** e **AJAX**, seguindo o conceito de **SPA (Single Page Application)**.

---

- **Consumo de API Aberta (AJAX):** Requisições assíncronas utilizando a API nativa `fetch()` para consumir os produtos da [FakeStore API](https://fakestoreapi.com/).
- **Hooks do React:** Implementação do **`useReducer`**
- **Biblioteca Externa:** **Material UI (MUI)** (`@mui/material`), utilizada para os componentes estruturais, responsividade em Grid de 12 colunas, gaveta lateral (`Drawer`), cards e ícones.

---

## Uso de IA

- **Antigravity** Utilizado na aproximação review-driven:
  - Validação de conformidade com os requisitos da disciplina;
  - Auxílio na implementação do reducer;
  - Sugestão de uso do MaterialUI e do hook reducer;
  - Estrutura dos elementos do MUI, o quê é "sx", "objectFit".

---

## 📂 Estrutura do Projeto

```text
src/
├── components/
│   ├── Header.jsx         # Barra de navegação com contador dinâmico
│   ├── ProductCard.jsx    # Card individual com imagem, preço e ação de compra
│   └── CartDrawer.jsx     # Gaveta lateral com listagem e remoção de itens
├── reducers/
│   └── cartReducer.js     # Reducer puro responsável pelo estado do carrinho
├── services/
│   └── api.js             # Camada de comunicação assíncrona (AJAX/Fetch)
├── App.jsx                # Componente integrador, estados e ciclo de vida
└── main.jsx               # Ponto de entrada da aplicação
```
