import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, HeaderComponent],
  // imports: [CommonModule, RouterOutlet, FormsModule, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  // export class AppComponent implements OnInit {
//   title = signal('HardwareRequestSPA');
//   name = '';
//   username = '';

// users: User[] = [];

// constructor( private userService: UserService){

// }
// ngOnInit() {
//   this.userService.getUsers().subscribe(data => {
//     this.users = data;
//   });
// }

// addUser(): void {
//   this.users.push(new User(this.name, this.username))
//   this.clearUser();
// }
//   clearUser(): void {
//     this.name = '';
//     this.username = '';
//   }



}
