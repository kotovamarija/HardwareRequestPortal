import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestDTO } from '../../models/request.model';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})

export class RequestComponent implements OnInit{
  itemName: string = '';
  reason: string = '';
  username: string = '';
  password: string = '';
  trackingNumber: string = 'ooo';
  errorMessage: string = '';


  constructor( 
    private route: ActivatedRoute,
    private requestService: RequestService,
    private navigationService: NavigationService,
    private router: Router,
   ){}

   ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemName = params.get('item') ?? '';
    });
  }

  addRequest(): void {

    let newRequestDTO: RequestDTO = new RequestDTO(
      this.itemName,
      this.reason,
      this.username,
      this.password,
      this.trackingNumber
    );

  console.log('READY TO BE SENT...' + newRequestDTO.trackingNumber);

  this.requestService.setUsername(this.username);

  this.requestService.addRequest(newRequestDTO)
  .subscribe({
    next: (response) => 
      {this.requestService.setTrackingNumber(response.trackingNumber);
      this.errorMessage = '';
      this.router.navigate(['/requestConfirmation']);
    },
    error: (error) => {
      console.error("Error message:", error);
      this.errorMessage = error.error?.message;
    }
  });
  this.requestService.setTrackingNumber(this.trackingNumber);
}

}
