import { TestBed } from '@angular/core/testing';

import { KnihaService } from './kniha.service';

describe('KnihaService', () => {
  let service: KnihaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnihaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
