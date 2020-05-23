import { TestBed } from '@angular/core/testing';
import { HouseInviteService } from './house-invite.service';

describe('HouseInviteService', () => {
  let service: HouseInviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseInviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
