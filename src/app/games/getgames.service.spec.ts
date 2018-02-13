import { TestBed, inject } from '@angular/core/testing';

import { GetgamesService } from './getgames.service';

describe('GetgamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetgamesService]
    });
  });

  it('should be created', inject([GetgamesService], (service: GetgamesService) => {
    expect(service).toBeTruthy();
  }));
});
