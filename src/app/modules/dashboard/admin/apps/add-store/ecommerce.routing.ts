import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/dashboard/admin/apps/add-store/inventory/inventory.component';
import { InventoryListComponent } from 'app/modules/dashboard/admin/apps/add-store/inventory/list/inventory.component';
import { InventoryCoordinatesResolver, InventoryGovernorateResolver, InventoryProductsResolver ,InventoryContactsResolver } from 'app/modules/dashboard/admin/apps/add-store/inventory/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'add-store'
    },
    {
        path     : 'add-store',
        component: InventoryComponent,
        children : [
            {
                path     : '',
                component: InventoryListComponent,
                resolve  : {
                    brands    :InventoryCoordinatesResolver,
                    categories: InventoryGovernorateResolver,
                    products  : InventoryProductsResolver,
                    contacts  : InventoryContactsResolver
                }
            }
        ]
 }
];
