import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private apiUrl = 'https://hardware-request-application-810218089742.europe-north1.run.app';  // backend url (for deployment)
  private apiUrl = 'http://localhost:8080'; // for running application locally
  
  constructor(private http: HttpClient) {
   }
   
login(user: User): Observable<{message: string}> {
  return this.http.post<{message: string}>(`${this.apiUrl}/users/login`, user);
}

}
