export interface Category {
    id: string;
    name: string;
    created_at?: string;
}

export interface Product {
    id: string;
    name: string;
    brand?: string;
    mrp_price: number;
    discount_price: number;
    size?: string;
    description?: string;
    category_id: string;
    image_url: string;
    image_urls?: string[];
    created_at: string;
    clicks: number;
    category?: {
        name: string;
    };
}

export interface Stats {
    totalProducts: number;
    totalClicks: number;
    topProduct: string;
    topProductsList: Pick<Product, 'name' | 'clicks'>[];
    recentProductsList: Partial<Product>[];
}

export interface FormState {
    name: string;
    brand: string;
    mrp_price: string;
    discount_price: string;
    size: string;
    description: string;
    category_id: string;
}

export interface FormErrors {
    name?: string;
    category_id?: string;
    mrp_price?: string;
    discount_price?: string;
    description?: string;
    images?: string;
}
