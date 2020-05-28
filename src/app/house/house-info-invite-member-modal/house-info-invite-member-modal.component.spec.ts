import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInfoInviteMemberModalComponent } from './house-info-invite-member-modal.component';

describe('HouseInfoInviteMemberModalComponent', () => {
  let component: HouseInfoInviteMemberModalComponent;
  let fixture: ComponentFixture<HouseInfoInviteMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInfoInviteMemberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInfoInviteMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
