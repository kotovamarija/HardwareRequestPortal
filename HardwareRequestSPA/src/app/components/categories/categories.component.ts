import { Component, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

categories: String[] = [];

constructor(private navigationService: NavigationService){

}
ngOnInit() {
  this.navigationService.getCategories().subscribe(data => {
    this.categories = data;
  })
}


}

