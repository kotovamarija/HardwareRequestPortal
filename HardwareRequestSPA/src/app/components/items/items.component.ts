import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
}

@Component({
  selector: 'app-items',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  typeName: string = '';
  items: Item[] = [];
  searchQuery: string = '';
  filteredItems: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.typeName = params.get('type') ?? '';
      setTimeout(() => this.loadProducts(), 0);
    });
  }

  loadProducts() {
    if (this.typeName) {
      this.navigationService.getItemsByType(this.typeName)
        .subscribe(data => {
          this.items = data.map(itemName => ({ name: itemName }));
          this.filteredItems = [...this.items];
        }
        );
    }
  }

  filterItems(): Item[] {
    return this.items.filter(item => this.getItemName(item).toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  getItemName(item: any): string {
    return item.name || '';
  }
}
