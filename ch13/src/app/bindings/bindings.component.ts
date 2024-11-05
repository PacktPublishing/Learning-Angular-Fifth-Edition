import { Component, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-bindings',
  imports: [MatButton],
  template: `
    <p>{{ title() }}</p>
    <button mat-button (click)="liked.emit()">Like!</button>
  `
})
export class BindingsComponent {
  title = input('');
  liked = output();
}
