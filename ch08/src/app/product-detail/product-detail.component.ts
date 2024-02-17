import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges
} from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { NumericDirective } from '../numeric.directive';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, NumericDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnChanges {
  @Input() id: number | undefined;
  @Output() added = new EventEmitter();
  @Output() deleted = new EventEmitter();
  product$: Observable<Product> | undefined;

  constructor(private productService: ProductsService, public authService: AuthService) { }

  addToCart() {
    this.added.emit();
  }

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id!);
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
