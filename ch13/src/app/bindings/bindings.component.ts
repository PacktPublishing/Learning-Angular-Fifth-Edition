import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [MatButton],
  template: `
    <p>{{ title }}</p>
    <button mat-button (click)="liked.emit()">Like!</button>
  `
})
export class BindingsComponent {
  @Input() title = '';
  @Output() liked = new EventEmitter();
}
