import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:8080/navig/categories');
  }

  getTypesByCategory(category: string): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8080/navig/categories/${category}`);
  }

  sendChosenType(type: string): Observable<string> {
    return this.http.post<string>(`http://localhost:8080/navig/${type}`, type);
  }

  getItemsByType(type: string): Observable<string[]> {
    console.log('THIS IS PRINTING OUT FROM getItemsByType METHOD...')
    return this.http.get<string[]>(`http://localhost:8080/navig/${type}`);
  }


}
