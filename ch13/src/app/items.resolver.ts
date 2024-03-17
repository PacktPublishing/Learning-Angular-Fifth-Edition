import { ResolveFn } from '@angular/router';
import { AsyncService } from './async.service';
import { inject } from '@angular/core';

export const itemsResolver: ResolveFn<string[]> = () => {
  const asyncService = inject(AsyncService);
  return asyncService.getItems();
};
