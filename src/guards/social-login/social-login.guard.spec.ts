import { TestBed } from '@angular/core/testing';

import { SocialLoginGuard } from './social-login.guard';

describe('SocialLoginGuard', () => {
  let guard: SocialLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SocialLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
