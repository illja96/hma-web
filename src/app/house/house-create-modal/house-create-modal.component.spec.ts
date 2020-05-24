import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCreateModalComponent } from './house-create-modal.component';

describe('HouseCreateModalComponent', () => {
  let component: HouseCreateModalComponent;
  let fixture: ComponentFixture<HouseCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
