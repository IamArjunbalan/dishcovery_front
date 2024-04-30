import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanComponent } from './mealplan.component';

describe('MealplanComponent', () => {
  let component: MealplanComponent;
  let fixture: ComponentFixture<MealplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealplanComponent]
    });
    fixture = TestBed.createComponent(MealplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
