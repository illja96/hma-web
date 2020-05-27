import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInfoTransactionsComponent } from './house-info-transactions.component';

describe('HouseInfoTransactionsComponent', () => {
  let component: HouseInfoTransactionsComponent;
  let fixture: ComponentFixture<HouseInfoTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseInfoTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInfoTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
