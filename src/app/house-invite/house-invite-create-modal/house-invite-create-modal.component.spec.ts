import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInviteCreateModalComponent } from './house-invite-create-modal.component';

describe('HouseInviteCreateModalComponent', () => {
  let component: HouseInviteCreateModalComponent;
  let fixture: ComponentFixture<HouseInviteCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInviteCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInviteCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
