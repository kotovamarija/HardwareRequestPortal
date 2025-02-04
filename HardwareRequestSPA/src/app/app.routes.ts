import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home.component').then((m) => m.HomeComponent)
    },
},
{
    path: 'todos',
    loadComponent: () => {
        return import('./todos/todos.component').then((m) => m.TodosComponent)
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

];
