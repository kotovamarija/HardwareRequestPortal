import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { RequestDTO } from '../../models/request.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-all-requests',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './view-all-requests.component.html',
  styleUrl: './view-all-requests.component.css'
})
export class ViewAllRequestsComponent implements OnInit {

  requests: RequestDTO[] = [];
  statusMessages: Record<string, string> = {};
  username: string = '';
  password: string = '';
  authenticated: boolean = false;
  errorMessage: string = '';

  constructor(private requestService: RequestService, private userService: UserService) {
  }

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getAllRequests().subscribe(
      data => {
        this.requests = data;
      },
    );
  }

  confirmRequest(trackingNumber: string) {
    this.requestService.confirmRequest(trackingNumber)
      .subscribe({
        next: (response) => {
          this.statusMessages[trackingNumber] = response.message;
          setTimeout(() => {
            this.loadRequests();
          }, 2000);
        }
      });
  }

  login(username: string, password: string): void {
    let authenticatedUser: User = new User(
      this.username = username,
      this.password = password
    );

    this.userService.login(authenticatedUser).subscribe({
      next: () => {
        this.loadRequests;
        this.authenticated = true;
      },
      error: (error) => {
        this.errorMessage = error.error?.message;
      }
    });
  }

  rejectRequest(trackingNumber: string) {
    this.requestService.rejectRequest(trackingNumber)
      .subscribe({
        next: (response) => {
          this.statusMessages[trackingNumber] = response.message;
          setTimeout(() => {
            this.loadRequests();
          }, 2000);
        }
      });
  }

  deleteRequest(trackingNumber: string) {
    this.requestService.deleteRequest(trackingNumber)
      .subscribe({
        next: (response) => {
          this.statusMessages[trackingNumber] = response.message;
          setTimeout(() => {
            this.loadRequests();
          }, 2000);
        }
      });
  }

}


