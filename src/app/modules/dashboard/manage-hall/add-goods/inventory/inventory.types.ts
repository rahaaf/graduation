export interface InventoryProduct
{
    id: string;
    idhall: string;
    name: string;
    tags?: string[];
    stock: number;
    width: number;
    cost: number;
    basePrice: number;
    height: number;
    price: number;
    weight: number;
    images: string;
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

