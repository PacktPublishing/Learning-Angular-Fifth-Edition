import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routed',
  template: '<span>{{ title }}</span>'
})
export class RoutedComponent {
  title = 'My routed component';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
