import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../services/navigation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  title = signal('HardwareRequestSPA');
  name = '';
  username = '';

users: User[] = [];
// categories: String[] = [];
selectedUser?: User | null = null;
selectedUsername: string = '';

constructor( private userService: UserService, private navigationService: NavigationService){

}
ngOnInit() {
  this.userService.getUsers().subscribe(data => {
    this.users = data;
  });
  // this.navigationService.getCategories().subscribe(data => {
  //   this.categories = data;
  // })
}

addUser(): void {

const newUser: User = new User(this.name, this.username);

this.userService.addUser(newUser).subscribe((savedUser) => {
  this.users.push(savedUser);
  this.clearUser();
})


}

clearUser(): void {
  this.name = '';
  this.username = '';
}

onSelectUser() {
  this.selectedUser = this.users.find(user => user.username?.toString() === this.selectedUsername) ?? null;
}


}
