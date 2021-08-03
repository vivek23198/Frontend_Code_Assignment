import { TestBed } from '@angular/core/testing';

import { DescriptionCityService } from './description-city.service';

describe('DescriptionCityService', () => {
  let service: DescriptionCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
