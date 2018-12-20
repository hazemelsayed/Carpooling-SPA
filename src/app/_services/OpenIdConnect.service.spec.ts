/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpenIdConnectService } from './OpenIdConnect.service';

describe('Service: OpenIdConnect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenIdConnectService]
    });
  });

  it('should ...', inject([OpenIdConnectService], (service: OpenIdConnectService) => {
    expect(service).toBeTruthy();
  }));
});
