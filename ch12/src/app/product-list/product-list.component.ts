import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import { Product } from '../product';
import { SortPipe } from '../sort.pipe';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    SortPipe,
    CommonModule,
    RouterLink,
    MatMiniFabButton,
    MatIcon,
    MatCardModule,
    MatTableModule,
    MatButtonToggle,
    MatButtonToggleGroup
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  columnNames = ['title', 'price'];  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.products$ = this.route.data.pipe(
      switchMap(data => of(data['products']))
    );
  }
}
