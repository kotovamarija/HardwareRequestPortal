import { Component, EnvironmentInjector} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { getPrerenderParams, routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  constructor(private injector: EnvironmentInjector) {
    routes.forEach(route => {
      if (route.data?.['getPrerenderParams']) {
        route.data['getPrerenderParams'] = getPrerenderParams(this.injector);
      }
    });
  }
}
