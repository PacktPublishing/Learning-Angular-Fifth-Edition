import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  let authService: AuthService;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });

    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true', () => {
    authService.isLoggedIn = true;
    expect(executeGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBeTrue();
  });

  it('should redirect', () => {
    authService.isLoggedIn = false;
    executeGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);
    expect(routerSpy.parseUrl).toHaveBeenCalledWith('/');
  });
});
