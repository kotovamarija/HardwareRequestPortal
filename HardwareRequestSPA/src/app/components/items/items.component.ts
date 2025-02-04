import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit{
  typeName: string = '';
  items: Object[] = [];

  constructor( 
    private route: ActivatedRoute,
    private navigationService: NavigationService,
   ){}

   ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('first test');
      this.typeName = params.get('type') ?? '';
      setTimeout(() => this.loadProducts(), 0);
      console.log('second test');
    });
  }

  loadProducts() {
    if (this.typeName) {
      this.navigationService.getItemsByType(this.typeName)
        .subscribe(data => this.items = data);
    }
  }
}
