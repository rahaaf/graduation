export interface InventoryProduct
{
    id: string;
    idstor: string;
    name: string;
    tags?: string[];
    hieght?: number | null;
    width?: number | null;
    stock: number;
    cost: number;
    basePrice: number;
    price: number;
    weight: number;
    thumbnail: string;
    images: string;
    active: boolean;
}

export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}


export interface InventoryTag
{
    id?: string;
    title?: string;
}
