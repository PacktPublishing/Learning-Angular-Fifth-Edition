import { TestBed } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set items', () => {
    const result = service.setItems('Camera');
    expect(result.length).toBe(3);
  });

  it('should get items', (done: DoneFn) => {
    service.getItems().subscribe(items => {
      expect(items.length).toBe(2);
      done();
    });
  });
});
