export interface InventoryProduct
{
    id: string;
    name: string;
    stock: number;
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

