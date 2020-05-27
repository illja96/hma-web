import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInviteMemberModalComponent } from './house-invite-member-modal.component';

describe('HouseInviteMemberModalComponent', () => {
  let component: HouseInviteMemberModalComponent;
  let fixture: ComponentFixture<HouseInviteMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInviteMemberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInviteMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
