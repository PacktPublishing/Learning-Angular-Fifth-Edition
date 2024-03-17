import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

import { itemsResolver } from './items.resolver';
import { Observable } from 'rxjs';

describe('itemsResolver', () => {
  const executeResolver: ResolveFn<string[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => itemsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });

  it('should return items', () => {
    (executeResolver({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot) as Observable<string[]>).subscribe(items => {
      expect(items).toEqual(['Microphone', 'Keyboard']);
    })
  });
});
