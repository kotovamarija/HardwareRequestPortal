import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
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


  constructor( 
    private route: ActivatedRoute,
    private requestService: RequestService,
    private navigationService: NavigationService,
   ){}

   ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemName = params.get('item') ?? '';
    });
  }

  addRequest(): void {
  const newRequestDTO = {
    itemName: this.itemName,
    reason: this.reason,
    username: this.username,
    password: this.password
  };
  console.log(newRequestDTO);

  this.requestService.setUsername(this.username);

  this.requestService.addRequest(newRequestDTO)
  .subscribe({
    next: (response) => console.log("The response from server:", response),
    error: (error) => console.error("Error message:", error)
  });

  // this.clearRequest();
}

  // clearRequest() {
  //   this.reason = '';
  //   this.username = '';
  //   this.password = '';
  // }
}
