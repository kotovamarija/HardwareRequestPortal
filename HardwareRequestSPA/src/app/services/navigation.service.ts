import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  //private apiUrl = 'https://hardware-request-application-810218089742.europe-north1.run.app';  // backend url (for deployment)
  private apiUrl = 'http://localhost:8080'; // for running application locally

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/navig/categories`);
  }

  getTypesByCategory(category: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/navig/categories/${category}`);
  }

  getItemsByType(type: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/navig/${type}`);
  }


}
