import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestDTO } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  constructor(private http: HttpClient) {}

  addRequest(requestDTO: RequestDTO): Observable<RequestDTO> {
    return this.http.post<RequestDTO>(`http://localhost:8080/request/new`, requestDTO);}


  private usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();
  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }
  getUsername(): string {
    return this.usernameSubject.value;
  }

  
  // -------
  private trackingNumberSubject = new BehaviorSubject<string>('');
  trackingNumber$ = this.trackingNumberSubject.asObservable();
  setTrackingNumber(trackingNumber: string): void {
    this.trackingNumberSubject.next(trackingNumber);
  }
  getTrackingNumber(): string {
    return this.trackingNumberSubject.value;
  }


   //  addRequest(request: RequestDTO): Observable<RequestDTO> {
      // console.log("I AM HERE")
    // console.log("Отправка запроса: ", JSON.stringify(request));
  
    // Преобразуем объект перед отправкой
    // const plainRequest = { ...request };
  
    // return this.http.post<RequestDTO>(`http://localhost:8080/request/new`, plainRequest, {
    //   headers: { 'Content-Type': 'application/json' }
    // });
}
