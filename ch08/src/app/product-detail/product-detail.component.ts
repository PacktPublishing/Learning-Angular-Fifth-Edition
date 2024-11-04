import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  output,
  OnChanges
} from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnChanges {
  id = input<number>();
  added = output();
  deleted = output();
  product$: Observable<Product> | undefined;

  constructor(private productService: ProductsService, public authService: AuthService) { }

  addToCart() {
    this.added.emit();
  }
  
  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id()!);
  }

  changePrice(product: Product, price: string) {
    this.productService.updateProduct(product.id, Number(price)).subscribe();
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }
  
}
