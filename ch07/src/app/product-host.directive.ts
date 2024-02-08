import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Directive({
  selector: '[appProductHost]',
  standalone: true
})
export class ProductHostDirective implements OnInit {

  constructor(private vc: ViewContainerRef) { }
  
  ngOnInit(): void {
    const productRef = this.vc.createComponent(ProductDetailComponent);
    productRef.setInput('product', {
      title: 'Optical mouse',
      price: 130,
      categories: { 1: 'Computing '}
    });
  }
}

