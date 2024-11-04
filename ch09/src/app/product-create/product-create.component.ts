import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  constructor(private productsService: ProductsService, private router: Router) {}

  createProduct(title: string, price: string, category: string) {
    this.productsService.addProduct({
      title,
      price: Number(price),
      category
    }).subscribe(() => this.router.navigate(['/products']));
  }

}
