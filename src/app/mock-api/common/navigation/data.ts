/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'apps',
        title   : 'Admin',
        subtitle: 'Admin permissions',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id      : 'apps.store',
                title   : 'Store',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'apps.store.add-store',
                        title: 'add-store',
                        type : 'basic',
                        link : '/apps/store/add-store'
                    }
                ]
            },
            {
                id      : 'apps.add-hall',
                title   : 'Hall',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'apps.add-hall.hallhouse',
                        title: 'Hallhouse',
                        type : 'basic',
                        link : '/apps/add-hall/hall'
                    }
                ]
            },
            {
                id   : 'apps.contacts',
                title: 'Contacts',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/apps/contacts'
            },
        ]
    },
    {
        id      : 'store',
        title   : 'Manage-store',
        subtitle: 'Manage-store permissions',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id      : 'store.add-goods',
                title   : 'Add-Goods',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'store.add-goods.goods',
                        title: 'Goods',
                        type : 'basic',
                        link : 'store/add-goods/goods'
                    }
                ]
            },
            {
                id      : 'store.output-goods',
                title   : 'Output-Goods',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'store.output-goods.out-goods',
                        title: 'Out-Goods',
                        type : 'basic',
                        link : 'store/output-goods/out-goods'
                    }
                ]
            }
        ]
    },
    {
        id      : 'hall',
        title   : 'Manage-hall',
        subtitle: 'Manage-hall permissions',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id      : 'hall.add-goods',
                title   : 'Add-Goods',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'hall.add-goods.goods-hall',
                        title: 'Goods',
                        type : 'basic',
                        link : 'hall/add-goods/goods-hall'
                    }
                ]
            },
            {
                id      : 'hall.output-goods',
                title   : 'Output-Goods',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'hall.output-goods.output',
                        title: 'Out-Goods',
                        type : 'basic',
                        link : 'hall/output-goods/output'
                    }
                ]
            },
            {
                id      : 'hall.add-order',
                title   : 'Add-order',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'hall.add-order.order',
                        title: 'Order',
                        type : 'basic',
                        link : 'hall/add-order/order'
                    }
                ]
            },
            {
                id      : 'hall.add-scal',
                title   : 'Add-scal',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'hall.add-scal.scal',
                        title: 'Scal',
                        type : 'basic',
                        link : 'hall/add-scal/scal'
                    }
                ]
            },
            {
                id      : 'hall.incomplete-goods',
                title   : 'Incomplete-goods',
                type    : 'collapsable',
                icon    : 'mat_outline:storefront',
                children: [
                    {
                        id   : 'hall.incomplete-goods.incomplete',
                        title: 'Incomplete',
                        type : 'basic',
                        link : 'hall/incomplete-goods/incomplete'
                    }
                ]
            }
        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [

];
export const futuristicNavigation: FuseNavigationItem[] = [

];
export const horizontalNavigation: FuseNavigationItem[] = [

];
