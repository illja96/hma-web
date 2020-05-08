import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCreationModalComponent } from './house-creation-modal.component';

describe('HouseCreationModalComponent', () => {
  let component: HouseCreationModalComponent;
  let fixture: ComponentFixture<HouseCreationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseCreationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
