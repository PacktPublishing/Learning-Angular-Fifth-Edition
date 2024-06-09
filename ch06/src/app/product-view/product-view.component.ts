import {
  Component,
  Input,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {
  @Input() id: number | undefined;
  protected product: WritableSignal<Product | undefined> = signal(undefined);
  
  constructor(private productViewService: ProductViewService) {}

  ngOnInit(): void {
    this.product.set(this.productViewService.getProduct(this.id!));
  }  
}
