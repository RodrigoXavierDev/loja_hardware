import { data } from "../data";

//função para pegar todos os produtos
export const getAllProducts = () => {
    return data.products;
}

//função para pegar um produto pelo id
export const getProductById = (id: number) => {
    return data.products.find(item => item.id === id);
}

//função para pegar todos os produtos de uma categoria
export const getProductsByCategory = (id: number) => {
    return data.products.filter(item => item.idCategory === id);
}