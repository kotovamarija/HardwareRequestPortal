import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})

export class RequestComponent implements OnInit{
  itemName: string = '';
  reason: string = '';

  constructor( 
    private route: ActivatedRoute,
    private navigationService: NavigationService,
   ){}

   ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemName = params.get('item') ?? '';
    });
  }

  addRequest(): void {
  
  const newUser: User = new User(this.name, this.username);
  
  this.navigationService.addUser(newUser).subscribe((savedUser) => {
    this.users.push(savedUser);
    this.clearUser();
  })
  

}
}
