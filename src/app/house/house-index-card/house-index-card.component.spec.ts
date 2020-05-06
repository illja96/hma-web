import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseIndexCardComponent } from './house-index-card.component';

describe('HouseIndexCardComponent', () => {
  let component: HouseIndexCardComponent;
  let fixture: ComponentFixture<HouseIndexCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseIndexCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseIndexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
