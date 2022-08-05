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
                id   : 'apps.store.add-store',
                title: 'add-store',
                type : 'basic',
                link : '/apps/store/add-store',
                icon    : 'mat_outline:storefront',
            },
            {
                id   : 'apps.add-hall.hallhouse',
                title: 'Hallhouse',
                type : 'basic',
                link : '/apps/add-hall/hall',
                icon    : 'mat_outline:add_business',
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
                id   : 'store.add-goods.goods',
                title: 'Goods',
                type : 'basic',
                link : 'store/add-goods/goods',
                icon    : 'mat_outline:add_box',
            },
            {
                id   : 'store.output-goods.out-goods',
                title: 'Out-Goods',
                type : 'basic',
                link : 'store/output-goods/out-goods',
                icon    : 'feather:shopping-bag',
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
                id   : 'hall.add-goods.goods-hall',
                title: 'Goods',
                type : 'basic',
                link : 'hall/add-goods/goods-hall',
                icon    : 'mat_outline:add_box',
            },
            {
                id   : 'hall.output-goods.output',
                title: 'Out-Goods',
                type : 'basic',
                link : 'hall/output-goods/output',
                icon    : 'feather:shopping-bag'

            },
            {
                id   : 'hall.add-order.order',
                title: 'Order',
                type : 'basic',
                link : 'hall/add-order/order',
                icon    :'mat_outline:reorder',
            },
            {
                id   : 'hall.add-scal.scal',
                title: 'Scal',
                type : 'basic',
                link : 'hall/add-scal/scal',
                icon    : 'auto_awesome_motion',
            },
            {
                id   : 'hall.incomplete-goods.incomplete',
                title: 'Incomplete',
                type : 'basic',
                link : 'hall/incomplete-goods/incomplete',
                icon    : 'border_color',
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
