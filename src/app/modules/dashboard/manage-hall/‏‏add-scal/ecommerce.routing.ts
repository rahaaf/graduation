import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/dashboard/manage-hall/‏‏add-scal/inventory/inventory.component';
import { InventoryListComponent } from 'app/modules/dashboard/manage-hall/‏‏add-scal/inventory/list/inventory.component';
import {  InventoryProductsResolver} from 'app/modules/dashboard/manage-hall/‏‏add-scal/inventory/inventory.resolvers';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'scal'
    },
    {
        path     : 'scal',
        component: InventoryComponent,
        children : [
            {
                path     : '',
                component: InventoryListComponent,
                resolve  : {
                    products  : InventoryProductsResolver,
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
