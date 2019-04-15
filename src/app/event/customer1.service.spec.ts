import { TestBed } from '@angular/core/testing';

import { Customer1Service } from './customer1.service';

describe('Customer1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Customer1Service = TestBed.get(Customer1Service);
    expect(service).toBeTruthy();
  });
});
