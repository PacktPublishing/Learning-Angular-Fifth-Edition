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
import { Observable } from 'rxjs';

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
  title: Signal<string>;
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });
  currentDate = signal(new Date());
  
  constructor(@Inject(APP_SETTINGS) public settings: AppSettings) {
    this.title$.subscribe(this.setTitle);
    this.title = computed(() => {
      return `${this.settings.title} (${this.currentDate()})`;
    });
  }

  private setTitle = () => {
    const timestamp = new Date();
    this.currentDate.update(() => timestamp);
  }  

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }  
  
  private onComplete() {
    return new Promise<void>(resolve => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }  
  
}
