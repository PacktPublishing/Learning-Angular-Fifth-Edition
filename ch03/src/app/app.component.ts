import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'World';
}
