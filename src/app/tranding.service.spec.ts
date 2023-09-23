import { TestBed } from '@angular/core/testing';

import { TrandingService } from './tranding.service';

describe('TrandingService', () => {
  let service: TrandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
