import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/dashboard/admin/apps/add-hall/inventory/inventory.component';
import { InventoryListComponent } from 'app/modules/dashboard/admin/apps/add-hall/inventory/list/inventory.component';
import { InventoryCoordinatesResolver, InventoryGovernorateResolver, InventoryProductsResolver,InventoryContactsResolver } from 'app/modules/dashboard/admin/apps/add-hall/inventory/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'hall'
    },
    {
        path     : 'hall',
        component: InventoryComponent,
        children : [
            {
                path     : '',
                component: InventoryListComponent,
                resolve  : {
                    brands    :InventoryCoordinatesResolver,
                    categories: InventoryGovernorateResolver,
                    products  : InventoryProductsResolver,
                    contacts: InventoryContactsResolver
                }
            }
        ]
 }
];
