import { TestBed } from '@angular/core/testing';

import { CidadesestadosService } from './cidadesestados.service';

describe('CidadesestadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CidadesestadosService = TestBed.get(CidadesestadosService);
    expect(service).toBeTruthy();
  });
});
