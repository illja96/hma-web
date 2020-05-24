import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDeleteOrLeaveModalComponent } from './house-delete-or-leave-modal.component';

describe('HouseDeleteOrLeaveModalComponent', () => {
  let component: HouseDeleteOrLeaveModalComponent;
  let fixture: ComponentFixture<HouseDeleteOrLeaveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDeleteOrLeaveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDeleteOrLeaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
