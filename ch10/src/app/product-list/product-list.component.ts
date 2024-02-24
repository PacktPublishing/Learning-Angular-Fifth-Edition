import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import { Product } from '../product';
import { SortPipe } from '../sort.pipe';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    SortPipe,
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.products$ = this.route.data.pipe(
      switchMap(data => of(data['products']))
    );
  }
}
