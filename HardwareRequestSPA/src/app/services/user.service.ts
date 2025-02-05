import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
   }

login(user: User): Observable<{message: string}> {
  return this.http.post<{message: string}>('http://localhost:8080/users/login', user);
}

}
