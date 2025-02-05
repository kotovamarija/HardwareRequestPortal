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

getUsers(): Observable<User[]>{
  return this.http.get<User[]>('http://localhost:8080/users');
}

addUser(user: User): Observable<User> {
  return this.http.post<User>('http://localhost:8080/users', user);
}

login(user: User): Observable<{message: string}> {
  console.log('hi from service - checking admin --- starting');
  console.log(user);
  console.log(user.username);
  console.log(user.password);
  return this.http.post<{message: string}>('http://localhost:8080/users/login', user);
}

}
