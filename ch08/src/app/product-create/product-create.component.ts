import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { NumericDirective } from '../numeric.directive';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [NumericDirective],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  constructor(private productsService: ProductsService) {}

  createProduct(title: string, price: string, category: string) {
    this.productsService.addProduct({
      title,
      price: Number(price),
      category
    }).subscribe();
  }
  
}
