import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInfoRemoveMemberModalComponent } from './house-info-remove-member-modal.component';

describe('HouseInfoRemoveMemberModalComponent', () => {
  let component: HouseInfoRemoveMemberModalComponent;
  let fixture: ComponentFixture<HouseInfoRemoveMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInfoRemoveMemberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInfoRemoveMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
