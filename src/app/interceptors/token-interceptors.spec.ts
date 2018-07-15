import { TestBed, inject } from '@angular/core/testing';

import { TokenInterceptors } from './token-interceptors';

describe('TokenInterceptors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptors]
    });
  });

  it('should be created', inject([TokenInterceptors], (service: TokenInterceptors) => {
    expect(service).toBeTruthy();
  }));
});
