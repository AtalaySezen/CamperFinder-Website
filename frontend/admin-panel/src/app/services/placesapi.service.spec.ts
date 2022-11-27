import { TestBed } from '@angular/core/testing';

import { PlacesapiService } from './placesapi.service';

describe('PlacesapiService', () => {
  let service: PlacesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
