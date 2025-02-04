import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-types',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent implements OnInit{
  categoryName: string = '';
  types: string[] = [];

  constructor( 
    private route: ActivatedRoute,
    private navigationService: NavigationService,
   ){}

   ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('category') ?? '';
      setTimeout(() => this.loadProducts(), 0);
    });
  }

  loadProducts() {
    if (this.categoryName) {
      this.navigationService.getTypesByCategory(this.categoryName)
        .subscribe(data => this.types = data);
    }
  }

}
