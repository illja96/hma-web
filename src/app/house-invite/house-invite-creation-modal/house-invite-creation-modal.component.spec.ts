import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInviteCreationModalComponent } from './house-invite-creation-modal.component';

describe('HouseInviteCreationModalComponent', () => {
  let component: HouseInviteCreationModalComponent;
  let fixture: ComponentFixture<HouseInviteCreationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInviteCreationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInviteCreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
