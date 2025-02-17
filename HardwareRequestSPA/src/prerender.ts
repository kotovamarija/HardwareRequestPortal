import { Route } from '@angular/router';
import { DataService } from './app/services/data.service';
import { NavigationService } from './app/services/navigation.service';
import { lastValueFrom } from 'rxjs';
import { inject } from '@angular/core';


export const getPrerenderParams = async (route: Route) => {
  const dataService = inject(DataService);

  const params: { category?: string; item?: string }[] = [];

  if (route.path === 'category/:category') {
    try {
      const categories = await lastValueFrom(dataService.getCategories());
      categories?.forEach((category) => params.push({ category }));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  if (route.path === 'request/:item') {
    try {
      const categories = await lastValueFrom(dataService.getCategories());
      for (const category of categories || []) {
        const types = await lastValueFrom(dataService.getTypes(category));
        for (const type of types || []) {
          const items = await lastValueFrom(dataService.getItems(type));
          items?.forEach((item) => params.push({ item }));
        }
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

  return params;
};