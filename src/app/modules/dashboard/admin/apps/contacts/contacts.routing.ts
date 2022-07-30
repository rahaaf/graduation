import { Route } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { CanDeactivateContactsDetails } from './contacts.guards';
import {  ContactsResolver, ContactsCountriesResolver, ContactsContactResolver } from './contacts.resolvers';
import { ContactsDetailsComponent } from './details/details.component';
import { ContactsListComponent } from './list/list.component';

export const contactsRoutes: Route[] = [
    {
        path     : '',
        component: ContactsComponent,
        children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    contacts : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            contact  : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]
    }
];
