import { Component, input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {
  id = input<number>();
  product: Product | undefined;
  
  constructor(private productViewService: ProductViewService) {}

  ngOnInit(): void {
    this.product = this.productViewService.getProduct(this.id()!);
  }  
}
