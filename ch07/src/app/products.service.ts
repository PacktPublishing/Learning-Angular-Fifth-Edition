import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { 
      id: 1,
      title: 'Keyboard',
      price: 100,
      categories: {
        1: 'Computing',
        2: 'Peripherals'
      }
    },
    {
      id: 2,
      title: 'Microphone',
      price: 35,
      categories: { 3: 'Multimedia' }
    },
    {
      id: 3,
      title: 'Web camera',
      price: 79,
      categories: {
        1: 'Computing',
        3: 'Multimedia'
      }
    },
    {
      id: 4,
      title: 'Tablet',
      price: 500,
      categories: { 4: 'Entertainment' }
    }
  ];
  
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
  
}
