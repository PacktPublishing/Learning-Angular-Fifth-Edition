import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const items = ['Microphone', 'Keyboard'];

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  getItems(): Observable<string[]> {
    return of(items).pipe(delay(500));
  }

  setItems(name: string) {
    return [...items, name ];
  }

}
