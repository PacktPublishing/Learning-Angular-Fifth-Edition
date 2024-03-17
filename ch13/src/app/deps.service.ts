import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepsService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('http://some.url');
  }

  addItem(item: string) {
    return this.http.post('http://some.url', { name: item });
  }
}
