import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request-confirmation',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './request-confirmation.component.html',
  styleUrl: './request-confirmation.component.css'
})
export class RequestConfirmationComponent implements OnInit {

  trackingNumber: string = '';
  username: string = '';

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.username$.subscribe(username => {
      if (username) {
        this.username = username;
      }
    });

    this.requestService.trackingNumber$.subscribe(trackingNumber => {
      if (trackingNumber) {
        this.trackingNumber = trackingNumber;
      }
    });

  }
}
