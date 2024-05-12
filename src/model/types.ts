export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface CartDetail {
    productId: number;
    quantity: number;
}