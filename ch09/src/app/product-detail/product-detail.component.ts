import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { Observable, switchMap } from 'rxjs';
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
export class ProductDetailComponent implements OnInit {
  @Input() id: number | undefined;
  product$: Observable<Product> | undefined;

  constructor(
    private productService: ProductsService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  addToCart() {
  }

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.productService.getProduct(Number(params.get('id')));
      })
    );
  }  

  changePrice(product: Product, price: string) {
    this.productService.updateProduct(product.id, Number(price)).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
  
}
