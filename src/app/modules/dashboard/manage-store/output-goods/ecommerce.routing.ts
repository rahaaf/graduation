import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/dashboard/manage-store/output-goods/inventory/inventory.component';
import { InventoryListComponent } from 'app/modules/dashboard/manage-store/output-goods/inventory/list/inventory.component';
import { InventoryProductsResolver, InventoryTagsResolver, InventoryHallResolver} from 'app/modules/dashboard/manage-store/output-goods/inventory/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'out-goods'
    },
    {
        path     : 'out-goods',
        component: InventoryComponent,
        children : [
            {
                path     : '',
                component: InventoryListComponent,
                resolve  : {
                    products  : InventoryProductsResolver,
                    tags      : InventoryTagsResolver,
                    halls      : InventoryHallResolver
                }
            }
        ]
        /*children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    tasks    : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            task     : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]*/
    }
];
