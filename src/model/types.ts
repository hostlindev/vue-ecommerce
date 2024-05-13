export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface CartDetail {
    product: Product;
    quantity: number;
}

export interface Category {
    id: number,
    name: string,
}