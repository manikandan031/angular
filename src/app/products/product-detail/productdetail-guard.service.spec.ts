import { TestBed, inject } from '@angular/core/testing';

import { ProductdetailGuardService } from './productdetail-guard.service';

describe('ProductdetailGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdetailGuardService]
    });
  });

  it('should be created', inject([ProductdetailGuardService], (service: ProductdetailGuardService) => {
    expect(service).toBeTruthy();
  }));
});
