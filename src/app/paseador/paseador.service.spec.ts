import { TestBed } from '@angular/core/testing';

import { PaseadorService } from './paseador.service';

describe('PaseadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaseadorService = TestBed.get(PaseadorService);
    expect(service).toBeTruthy();
  });
});
