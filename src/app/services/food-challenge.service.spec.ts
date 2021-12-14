import { TestBed } from '@angular/core/testing';

import { FoodChallengeService } from './food-challenge.service';

describe('FoodChallengeService', () => {
  let service: FoodChallengeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodChallengeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
