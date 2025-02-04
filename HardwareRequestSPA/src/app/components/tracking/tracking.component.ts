import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
      private requestService: RequestService,
      private router: Router,
     ){}
  

  
    track(): void {
      console.log('starting track() method....')
  
    this.requestService.track(this.trackingNumber).subscribe({
      next: (response) => 
        {this.status = response.status;
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

// -----------------------------
//   this.requestService.addRequest(newRequestDTO)
//   .subscribe({
//     next: (response) => 
//       {this.requestService.setTrackingNumber(response.trackingNumber);
//       this.errorMessage = '';
//       this.router.navigate(['/requestConfirmation']);
//     },
//     error: (error) => {
//       console.error("Error message:", error);
//       this.errorMessage = error.error?.message;
//     }
//   });
  

}
