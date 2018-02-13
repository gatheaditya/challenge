import { TestBed, inject } from '@angular/core/testing';

import { GetprojectsService } from './getprojects.service';

describe('GetprojectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetprojectsService]
    });
  });

  it('should be created', inject([GetprojectsService], (service: GetprojectsService) => {
    expect(service).toBeTruthy();
  }));
});
