import { TestBed } from '@angular/core/testing';

import { SocialLoginInterceptor } from './social-login.interceptor';

describe('SocialLoginInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SocialLoginInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SocialLoginInterceptor = TestBed.inject(SocialLoginInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
