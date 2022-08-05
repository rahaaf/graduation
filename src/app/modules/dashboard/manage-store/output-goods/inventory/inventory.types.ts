export interface InventoryGoods
{
    id: string;
    namestore?: string;
    namehall: string;
    name: string;
    tags?: string[];
    quantity: number;
    width: number;
    cost: number;
    basePrice: number;
    height: number;
    price: number;
    weight: number;
    images: string;
}

export interface InventoryPaginationGoods
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface InventoryCategory
{
    id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface InventoryBrand
{
    id: string;
    name: string;
    slug: string;
}

export interface InventoryTag
{
    id?: string;
    title?: string;
}

export interface InventoryVendor
{
    id: string;
    name: string;
    slug: string;
}
