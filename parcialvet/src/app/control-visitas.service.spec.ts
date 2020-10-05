import { TestBed } from '@angular/core/testing';

import { ControlVisitasService } from './control-visitas.service';

describe('ControlVisitasService', () => {
  let service: ControlVisitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlVisitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
