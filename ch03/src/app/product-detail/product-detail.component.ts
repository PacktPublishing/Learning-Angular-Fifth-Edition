import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product: Product | undefined;
  @Output() added = new EventEmitter();

  addToCart() {
    this.added.emit();
  }
}
