import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-async',
  imports: [AsyncPipe],
  template: `
    @for(item of items$ | async; track item) {
      <p>{{ item }}</p>
    }
  `
})
export class AsyncComponent implements OnInit {
  items$: Observable<string[]> | undefined;

  constructor(private asyncService: AsyncService) {}

  ngOnInit(): void {
    this.items$ = this.asyncService.getItems();
  }
}
