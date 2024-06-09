import {
  Component,
  Inject,
  Signal,
  computed,
  signal 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS, appSettings, AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
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
  protected title: Signal<string> | undefined;
  protected currentDate = signal(new Date());

  constructor(@Inject(APP_SETTINGS) public settings: AppSettings) {
    setInterval(() => {
      this.currentDate.update(() => new Date());
    }, 2000);
    this.title = computed(() => {
      return `${this.settings.title} (${this.currentDate()})`;
    });  
  }
}
