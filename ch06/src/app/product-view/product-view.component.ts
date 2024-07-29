import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  signal,
  WritableSignal
} from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Product } from '../product';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit, OnDestroy {
  @Input() id: number | undefined;
  product: WritableSignal<Product | undefined> = signal(undefined);
  private productSub = new Subject<void>();
  
  constructor(private productViewService: ProductViewService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }  

  private getProduct() {
    this.productViewService.getProduct(this.id!).pipe(
      takeUntil(this.productSub)
    ).subscribe(product => this.product.set(product));
  }
  
}
