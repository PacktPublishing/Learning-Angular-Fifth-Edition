import {
  Component,
  Inject,
  Signal,
  computed,
  signal 
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings, AppSettings } from './app.settings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
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
  title: Signal<string> | undefined;
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });
  currentDate = signal(new Date());
  
  constructor(@Inject(APP_SETTINGS) public settings: AppSettings) {
    setInterval(() => {
      this.currentDate.update(() => new Date());
    }, 2000);
    this.title = computed(() => {
      return `${this.settings.title} (${this.currentDate()})`;
    });  
  }
  
}
