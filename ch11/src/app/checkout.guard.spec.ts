import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { checkoutGuard } from './checkout.guard';

describe('checkoutGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkoutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
