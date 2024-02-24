import { TestBed } from '@angular/core/testing';

import { XhrErrorHandlerService } from './xhr-error-handler.service';

describe('XhrErrorHandlerService', () => {
  let service: XhrErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XhrErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
