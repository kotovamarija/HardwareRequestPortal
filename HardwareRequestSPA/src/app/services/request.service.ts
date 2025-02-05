import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestDTO } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  addRequest(requestDTO: RequestDTO): Observable<RequestDTO> {
    return this.http.post<any>(`http://localhost:8080/request/new`, requestDTO);
  }

  track(trackingNumber: string): Observable<{ status: string }> {
    return this.http.post<{ status: string }>(`http://localhost:8080/request/track`, trackingNumber);
  }

  getAllRequests(): Observable<RequestDTO[]> {
    return this.http.get<RequestDTO[]>('http://localhost:8080/request/viewAll');
  }

  confirmRequest(trackingNumber: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`http://localhost:8080/request/confirm`, { trackingNumber });
  }

  rejectRequest(trackingNumber: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`http://localhost:8080/request/reject`, { trackingNumber });
  }

  deleteRequest(trackingNumber: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`http://localhost:8080/request/delete`, { trackingNumber });
  }

  private usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();
  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }
  getUsername(): string {
    return this.usernameSubject.value;
  }

  private trackingNumberSubject = new BehaviorSubject<string>('');
  trackingNumber$ = this.trackingNumberSubject.asObservable();
  setTrackingNumber(trackingNumber: string): void {
    this.trackingNumberSubject.next(trackingNumber);
  }
  getTrackingNumber(): string {
    return this.trackingNumberSubject.value;
  }

}
