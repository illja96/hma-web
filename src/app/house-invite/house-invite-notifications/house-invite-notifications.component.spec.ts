import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInviteNotificationsComponent } from './house-invite-notifications.component';

describe('HouseInviteNotificationsComponent', () => {
  let component: HouseInviteNotificationsComponent;
  let fixture: ComponentFixture<HouseInviteNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInviteNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInviteNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
