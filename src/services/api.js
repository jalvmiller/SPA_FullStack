const BASE_URL = 'https://fakestoreapi.com';
// Retorna um JSON

export async function fetchProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    // chamada assíncrona, await.. faz a chamada,
    // com base na URL colocada dentro da const BASE_URL
    // que vai ser a raiz da rota
    
    if (!response.ok) {
        throw new Error('Erro no fetch de produtos!');
    }
    // handler básico

    return response.json();
}

export async function fetchCategories() {
    const response = await fetch(`${BASE_URL}/products/categories`);
    // chamada assíncrona, await.. faz a chamada,
    // com base na URL colocada dentro da const BASE_URL
    // que vai ser a raiz da rota

    if (!response.ok) {
        throw new Error('Erro no fetch de categorias!');
    }
    // handler básico

    return response.json();
}

