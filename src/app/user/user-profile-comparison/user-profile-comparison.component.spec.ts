import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComparisonComponent } from './user-profile-comparison.component';

describe('UserProfileComparisonComponent', () => {
  let component: UserProfileComparisonComponent;
  let fixture: ComponentFixture<UserProfileComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
