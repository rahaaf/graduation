import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/dashboard/manage-hall/incomplete-goods/inventory/inventory.component';
import { InventoryListComponent } from 'app/modules/dashboard/manage-hall/incomplete-goods/inventory/list/inventory.component';
import { InventoryProductsResolver, InventoryTagsResolver} from 'app/modules/dashboard/manage-hall/incomplete-goods/inventory/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'incomplete'
    },
    {
        path     : 'incomplete',
        component: InventoryComponent,
        children : [
            {
                path     : '',
                component: InventoryListComponent,
                resolve  : {
                    products  : InventoryProductsResolver,
                    tags      : InventoryTagsResolver,
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
