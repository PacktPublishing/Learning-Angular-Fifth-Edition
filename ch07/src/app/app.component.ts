import {
  Component,
  inject,
  Signal,
  computed,
  signal
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductListComponent,
    CopyrightDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings }
  ]
})
export class AppComponent {
  title: Signal<string> = signal('');
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });  
  settings = inject(APP_SETTINGS);
  currentDate = signal(new Date());
  private setTitle = () => {
    this.currentDate.set(new Date());
  }

  constructor() {
    this.title$.subscribe(this.setTitle);
    this.title = computed(() => {
      return `${this.settings.title} (${this.currentDate()})`;
    });
  }
  
}
