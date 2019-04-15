import { TestBed } from '@angular/core/testing';

import { Customer2Service } from './customer2.service';

describe('Customer2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Customer2Service = TestBed.get(Customer2Service);
    expect(service).toBeTruthy();
  });
});
