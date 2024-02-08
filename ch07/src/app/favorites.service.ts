import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  constructor() {
    super();
  }
  
  override getProducts(): Product[] {
    return super.getProducts().slice(1, 3);
  }  
}
