import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInfoMembersComponent } from './house-info-members.component';

describe('HouseInfoMembersComponent', () => {
  let component: HouseInfoMembersComponent;
  let fixture: ComponentFixture<HouseInfoMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInfoMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInfoMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
