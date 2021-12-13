import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodChallengeComponent } from './food-challenge.component';

describe('FoodChallengeComponent', () => {
  let component: FoodChallengeComponent;
  let fixture: ComponentFixture<FoodChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
