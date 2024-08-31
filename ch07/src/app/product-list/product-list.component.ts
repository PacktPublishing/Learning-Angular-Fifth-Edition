import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = toSignal(this.productService.getProducts(), {
    initialValue: []
  });  
  selectedProduct: Product | undefined;
  
  constructor(private productService: ProductsService) {}
  
  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }   
}
