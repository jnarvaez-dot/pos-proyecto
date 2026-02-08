export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    cost: number | null;
    stock: number;
    minStock: number;
    categoryId: number;
    category: Category;
    createdAt: string | Date;
    updatedAt: string | Date;
}
export interface SaleItemInput {
    productId: number;
    quantity: number;
    price: number;
}

export interface SaleCreateInput {
    userId: string;
    items: SaleItemInput[];
}

export type Role = 'ADMIN' | 'CASHIER';

export interface User {
    id: string;
    email: string;
    name: string | null;
    role: Role;
    createdAt: string | Date;
    updatedAt: string | Date;
}

export interface LoginCredentials {
    email: string;
    password?: string;
}