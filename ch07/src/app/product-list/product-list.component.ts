import { Component, Signal, signal } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { ProductViewComponent } from '../product-view/product-view.component';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent, SortPipe, ProductViewComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct: Product | undefined;
  products: Signal<Product[]> = signal([]);

  constructor(private productService: ProductsService) {
    this.products = toSignal(this.productService.getProducts(), {
      initialValue: []
    });
  }
  
  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }
  
}
