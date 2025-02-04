import { Component, input, signal } from '@angular/core';
import { CategoriesComponent } from '../components/categories/categories.component';

@Component({
  selector: 'app-home',
  imports: [CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 homeMessage = signal('printing from home.component.ts......');

 keyUpHandler(event: KeyboardEvent){
  console.log(`some key has been pressed... ${event.key}...`);
 }

}
