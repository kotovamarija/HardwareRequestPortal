import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private navigationService: NavigationService) {}

  getCategories(): Observable<string[]> {
    return this.navigationService.getCategories();
  }

  getTypes(category: string): Observable<string[]> {
    return this.navigationService.getTypesByCategory(category);
  }

  getItems(type: string): Observable<string[]> {
    return this.navigationService.getItemsByType(type);
  }
}