import { TestBed } from '@angular/core/testing';

import { RequiredAuthenticatedRouteGuardService } from './required-authenticated-route-guard.service';

describe('RequiredAuthenticatedRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequiredAuthenticatedRouteGuardService = TestBed.get(RequiredAuthenticatedRouteGuardService);
    expect(service).toBeTruthy();
  });
});
