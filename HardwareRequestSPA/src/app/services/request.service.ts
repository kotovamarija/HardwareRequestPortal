import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestDTO } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  //private apiUrl = 'https://hardware-request-application-810218089742.europe-north1.run.app';  // backend url (for deployment)
  private apiUrl = 'http://localhost:8080'; // for running application locally

  constructor(private http: HttpClient) { }

  addRequest(requestDTO: RequestDTO): Observable<RequestDTO> {
    return this.http.post<any>(`${this.apiUrl}/request/new`, requestDTO);
  }

  track(trackingNumber: string): Observable<{ status: string }> {
    return this.http.post<{ status: string }>(`${this.apiUrl}/request/track`, trackingNumber);
  }

  getAllRequests(): Observable<RequestDTO[]> {
    return this.http.get<RequestDTO[]>(`${this.apiUrl}/request/viewAll`);
  }

  confirmRequest(trackingNumber: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/request/confirm`, { trackingNumber });
  }

  rejectRequest(trackingNumber: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/request/reject`, { trackingNumber });
  }

  deleteRequest(trackingNumber: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/request/delete`, { trackingNumber });
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
