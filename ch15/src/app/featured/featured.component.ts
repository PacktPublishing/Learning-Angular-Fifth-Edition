import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-featured',
  imports: [CommonModule, MatButton, MatCardModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent implements OnInit {
  product$: Observable<Product> | undefined;
  
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.product$ = this.productService.getFeatured();
  }
}
