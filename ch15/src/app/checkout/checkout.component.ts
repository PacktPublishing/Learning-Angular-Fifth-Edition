import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [MatButton, MatDialogModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: number) {}
}
