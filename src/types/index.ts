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

// 3. Ejemplo de cómo la usaría tu compañero en el Frontend
/*
  const [products, setProducts] = useState<Product[]>([]);
*/