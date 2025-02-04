import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestDTO } from '../models/request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  constructor(private http: HttpClient) {

   }

  //  addRequest(request: RequestDTO): Observable<RequestDTO> {
    addRequest(request: any): Observable<any> {
    console.log("I AM HERE")
    console.log("Отправка запроса: ", JSON.stringify(request));
  
    // Преобразуем объект перед отправкой
    const plainRequest = { ...request };
  
    // return this.http.post<RequestDTO>(`http://localhost:8080/request/new`, plainRequest, {
    //   headers: { 'Content-Type': 'application/json' }
    // });

    return this.http.post<any>(`http://localhost:8080/request/new`, request, {
      headers: { 'Content-Type': 'application/json' }
    });
    
  }
}
