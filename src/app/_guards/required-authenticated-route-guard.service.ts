import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OpenIdConnectService } from '../_services/OpenIdConnect.service';

@Injectable({
  providedIn: 'root'
})
export class RequiredAuthenticatedRouteGuardService implements CanActivate {

  constructor(private openIdConnectService: OpenIdConnectService,
    private router: Router) { }

  canActivate() {
    if (this.openIdConnectService.userAvailable) {
      return true;
    } else {
      this.openIdConnectService.triggerSignIn();
      return false;
    }
  }
}
