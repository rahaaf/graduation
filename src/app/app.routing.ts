import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo:'sign-in'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo:'/apps/store/add-store'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
               // Apps Admin
            {path: 'apps', children: [
                    {path: 'contacts', loadChildren: () => import('app/modules/dashboard/admin/apps/contacts/contacts.module').then(m => m.ContactsModule)},
                    {path: 'store', loadChildren: () => import('app/modules/dashboard/admin/apps/add-store/ecommerce.module').then(m => m.ECommerceModule)},
                    {path: 'add-hall', loadChildren: () => import('app/modules/dashboard/admin/apps/add-hall/ecommerce.module').then(m => m.ECommerceModule)},

             ]},
             //Manage-Store
             {path: 'store', children: [
                {path: 'add-goods', loadChildren: () => import('app/modules/dashboard/manage-store/add-goods/ecommerce.module').then(m => m.ECommerceModule)},
                {path: 'output-goods', loadChildren: () => import('app/modules/dashboard/manage-store/output-goods/ecommerce.module').then(m => m.ECommerceModule)},

         ]},
         {path: 'hall', children: [
            {path: 'add-goods', loadChildren: () => import('app/modules/dashboard/manage-hall/add-goods/ecommerce.module').then(m => m.ECommerceModule)},
            {path: 'output-goods', loadChildren: () => import('app/modules/dashboard/manage-hall/output-goods/ecommerce.module').then(m => m.ECommerceModule)},
            {path: 'add-order', loadChildren: () => import('app/modules/dashboard/manage-hall/add-order/ecommerce.module').then(m => m.ECommerceModule)},
            {path: 'incomplete-goods', loadChildren: () => import('app/modules/dashboard/manage-hall/incomplete-goods/ecommerce.module').then(m => m.ECommerceModule)},
            {path: 'add-scal', loadChildren: () => import('app/modules/dashboard/manage-hall/‏‏add-scal/ecommerce.module').then(m => m.ECommerceModule)},
         ]},
        ]
    }];
