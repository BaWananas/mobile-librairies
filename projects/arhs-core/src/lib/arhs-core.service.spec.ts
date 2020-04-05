import { TestBed } from '@angular/core/testing';

import { ArhsCoreService } from './arhs-core.service';

describe('ArhsCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArhsCoreService = TestBed.get(ArhsCoreService);
    expect(service).toBeTruthy();
  });
});
