import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./components/categories/categories.component').then((m) => m.CategoriesComponent)
    },
},

{
    path: 'categories',
    loadComponent: () => {
        return import('./components/categories/categories.component').then((m) => m.CategoriesComponent)
    },
},

{
    
    path: 'category/:category',
    loadComponent: () => {
        return import('./components/types/types.component').then((m) => m.TypesComponent)
    },
},

{
    
    path: 'type/:type',
    loadComponent: () => {
        console.log('INSIDE ROUTES');
        return import('./components/items/items.component').then((m) => m.ItemsComponent)
    },
},

{
    path: 'request/:item',
    loadComponent: () => {
        return import('./components/request/request.component').then((m) => m.RequestComponent)
    },
},

{
    path: 'requestConfirmation',
    loadComponent: () => {
        return import('./components/request-confirmation/request-confirmation.component').then((m) => m.RequestConfirmationComponent)
    },
},

{
    path: 'tracking',
    loadComponent: () => {
        return import('./components/tracking/tracking.component').then((m) => m.TrackingComponent)
    },
},

{
    path: 'admin',
    loadComponent: () => {
        console.log('from admin route.....')
        return import('./components/view-all-requests/view-all-requests.component').then((m) => m.ViewAllRequestsComponent)
    },
},

];
