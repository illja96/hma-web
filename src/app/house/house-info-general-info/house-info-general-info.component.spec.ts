import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInfoGeneralInfoComponent } from './house-info-general-info.component';

describe('HouseInfoGeneralInfoComponent', () => {
  let component: HouseInfoGeneralInfoComponent;
  let fixture: ComponentFixture<HouseInfoGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInfoGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInfoGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
