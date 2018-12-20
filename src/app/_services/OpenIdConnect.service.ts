import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { environment } from 'src/environments/environment';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenIdConnectService {

  private userManager: UserManager = new UserManager(environment.openIdConnectSettings);
  private currentUser: User;

  // https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0
  /* using the ReplaySubject to (Guard the router by) overcome the Async nature of oidc while
   checkign the currentUser status (loaded or not). */
  userLoaded$ = new ReplaySubject<boolean>(1);

  get userAvailable(): boolean {
    return this.currentUser != null;
  }

  get user(): User {
    return this.currentUser;
  }

constructor() {
  this.userManager.clearStaleState();

  // this is triggerd whenever a user has been loaded
  /*
    case 1 : The UserManager will try and load the user from ID token it may have gotten from a previous session.
    case 2 : Whenever a successful authentication reuqest happens.
  */
  this.userManager.events.addUserLoaded(user => {
    if (!environment.production) {
      console.log('User Loaded.', user);
    }
    this.currentUser = user;
    this.userLoaded$.next(true);
  });

  // this event is raised when the session has been terminated (via triggerSignOut fn)
  this.userManager.events.addUserUnloaded((e) => {
    if (!environment.production) {
      console.log('User unLoaded.');
    }
    this.currentUser = null;
    this.userLoaded$.next(false);
  });
}

triggerSignIn() {
  this.userManager.signinRedirect().then(function () {
    if (!environment.production) {
      console.log('Redirection to signin triggered');
    }
  });
}

handleCallBack() {
  this.userManager.signinRedirectCallback().then(function (user) {
    if (!environment.production) {
      console.log('Callback after signin handled successfully', user);
    }
  });
}

handleSilentCallback() {
  this.userManager.signinSilentCallback().then(user => {
    this.currentUser = user;
    if (!environment.production) {
      console.log('Callback after silent signin handled.', user);
    }
  });
}

/* this will clear the user from session storage, and will redirect to the
  endsession endpoint at the level of IDP */
triggerSignOut() {
  this.userManager.signoutRedirect().then(function (resp) {
    if (!environment.production) {
      console.log('Redirection to sign out triggered.', resp);
    }
  });
}

}
