import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OpenIdConnectService } from './_services/OpenIdConnect.service';
import { IUser } from './_models/Iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // @Output() currentUserOutput = new EventEmitter();
  currentUser: IUser;
  title = 'Carpooling';
  _openIdConnectService;

  constructor(private openIdConnectService: OpenIdConnectService) {
    this._openIdConnectService = openIdConnectService;
  }

  ngOnInit(): void {
    this.openIdConnectService.userLoaded$.subscribe((userLoaded) => {
      if (userLoaded) {
        this.currentUser = this.openIdConnectService.user.profile;
        // this.currentUserOutput.emit(this.openIdConnectService.user.profile);
      } else {
        console.log('An error happened: user falied to loaded.');
      }
    });
  }

  /* The routeguard taking care of authentication piece RequiredAuthenticatedRouteGuardService
  ngOnInit(): void {
    const path = window.location.pathname;
    if (path !== '/signin-oidc') {
      if (!this.openIdConnectService.userAvailable) {
        this.openIdConnectService.triggerSignIn();
      }
    }

  }
  */

}
