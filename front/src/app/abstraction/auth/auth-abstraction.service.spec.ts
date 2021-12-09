/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthAbstractionService } from './auth-abstraction.service';

describe('Service: AuthAbstraction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAbstractionService]
    });
  });

  it('should ...', inject([AuthAbstractionService], (service: AuthAbstractionService) => {
    expect(service).toBeTruthy();
  }));
});
