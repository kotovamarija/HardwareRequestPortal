import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tracking',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css'
})
export class TrackingComponent {

  trackingNumber: string = '';
  errorMessage: string = '';
  status: string = '';

  constructor(
    private requestService: RequestService
  ) { }

  track(): void {
    this.requestService.track(this.trackingNumber).subscribe({
      next: (response) => {
        this.status = response.status;
        this.errorMessage = '';
        this.trackingNumber = '';

      },
      error: (error) => {
        this.errorMessage = error.error?.message;
        this.trackingNumber = '';
        this.status = '';
      }
    })
  }

}
