import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CopyrightDirective } from './copyright.directive';
import { APP_SETTINGS } from './app.settings';
import { AuthComponent } from './auth/auth.component';
import { MatToolbarRow, MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    CopyrightDirective,
    AuthComponent,
    MatToolbarRow,
    MatToolbar,
    MatButton,
    MatBadge
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  settings = inject(APP_SETTINGS);
  cartService = inject(CartService);
}
