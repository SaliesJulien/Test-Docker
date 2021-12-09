/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthCoreService } from './auth-core.service';

describe('Service: AuthCore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCoreService]
    });
  });

  it('should ...', inject([AuthCoreService], (service: AuthCoreService) => {
    expect(service).toBeTruthy();
  }));
});
