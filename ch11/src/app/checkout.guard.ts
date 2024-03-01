import { CanDeactivateFn } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { inject } from '@angular/core';
import { CartService } from './cart.service';

export const checkoutGuard: CanDeactivateFn<CartComponent> = () => {
  const cartService = inject(CartService);
  if (cartService.cart) {
    const confirmation = confirm(
      'You have pending items in your cart. Do you want to continue?'
    );
    return confirmation;
  }
  return true;
};
