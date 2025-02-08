export interface IProduct {
    id: number;
    sku: string;
    name: string;
    price: number;
    salePrice: number;
    category: string;
    quantity?: number;
    tags?: string[];
    imageUrl?: string[];
    description?: string;
    rating?: number;
    reviews?: IProductReview[];
}

export interface IProductReview {
    id: number;
    userId: number;
    productId: number;
    title: string;
    content: string;
    rating: number;
    createdAt: Date;
}

export interface ICategory {
    id: number;
    name: string;
    parentId: number | null;
}

export interface ITag {
    id: number;
    name: string;
}

export interface ProductsListDto {
    products: IProduct[];
}