import { Route, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { NavigationService } from './services/navigation.service';
import { inject, runInInjectionContext, EnvironmentInjector } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export const getPrerenderParams = (injector: EnvironmentInjector) => {
  return async (route: Route) => {
    return runInInjectionContext(injector, async () => {
      const http = inject(HttpClient); 
      const navigationService = new NavigationService(http);
      const dataService = new DataService(navigationService);

      const params: { category?: string; item?: string }[] = [];

      if (route.path === 'category/:category') {
        const categories = await dataService.getCategories().toPromise();
        if (categories) {
          categories.forEach((category) => {
            params.push({ category });
          });
        }
      }

      if (route.path === 'request/:item') {
        const categories = await dataService.getCategories().toPromise();
        if (categories) {
          for (const category of categories) {
            const types = await dataService.getTypes(category).toPromise();
            if (types) {
              for (const type of types) {
                const items = await dataService.getItems(type).toPromise();
                if (items) {
                  items.forEach((item) => {
                    params.push({ item });
                  });
                }
              }
            }
          }
        }
      }

      return params;
    });
  };
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./components/categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
  },
  {
    path: 'category/:category',
    loadComponent: () =>
      import('./components/types/types.component').then(
        (m) => m.TypesComponent
      ),
      data: { getPrerenderParams: () => getPrerenderParams(inject(EnvironmentInjector)) }, 
  },
  {
    path: 'type/:type',
    loadComponent: () =>
      import('./components/items/items.component').then(
        (m) => m.ItemsComponent
      ),
  },
  {
    path: 'request/:item',
    loadComponent: () =>
      import('./components/request/request.component').then(
        (m) => m.RequestComponent
      ),
      data: { getPrerenderParams: () => getPrerenderParams(inject(EnvironmentInjector)) }, 
  },
  {
    path: 'requestConfirmation',
    loadComponent: () =>
      import('./components/request-confirmation/request-confirmation.component').then(
        (m) => m.RequestConfirmationComponent
      ),
  },
  {
    path: 'tracking',
    loadComponent: () =>
      import('./components/tracking/tracking.component').then(
        (m) => m.TrackingComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./components/view-all-requests/view-all-requests.component').then(
        (m) => m.ViewAllRequestsComponent
      ),
  },
];