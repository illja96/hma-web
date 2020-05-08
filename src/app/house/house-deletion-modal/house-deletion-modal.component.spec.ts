import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDeletionModalComponent } from './house-deletion-modal.component';

describe('HouseDeletionModalComponent', () => {
  let component: HouseDeletionModalComponent;
  let fixture: ComponentFixture<HouseDeletionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDeletionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDeletionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
