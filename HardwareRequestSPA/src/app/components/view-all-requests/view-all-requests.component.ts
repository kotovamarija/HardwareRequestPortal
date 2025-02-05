import { Component, OnInit} from '@angular/core';
import { RequestService } from '../../services/request.service';
import { RequestDTO } from '../../models/request.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all-requests',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './view-all-requests.component.html',
  styleUrl: './view-all-requests.component.css'
})
export class ViewAllRequestsComponent implements OnInit {

requests: RequestDTO[] = [];
statusMessages: Record<string, string> = {};

constructor( private requestService: RequestService,  private router: Router,){

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
  console.log('starting main method...')
  this.requestService.confirmRequest(trackingNumber)
  .subscribe({
    next: (response) => 
      { 
        this.statusMessages[trackingNumber] = response.message;
        setTimeout(() => {
          this.loadRequests();
        }, 2000);
    }
  });
}

rejectRequest(trackingNumber: string) {
    this.requestService.rejectRequest(trackingNumber)
    .subscribe({
      next: (response) => 
        {
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
        next: (response) => 
          {
            this.statusMessages[trackingNumber] = response.message;
            setTimeout(() => {
              this.loadRequests();
            }, 2000);
        }
      });
}

}


