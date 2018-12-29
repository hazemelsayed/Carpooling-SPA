import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RideListComponent } from './rides/ride-list/ride-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { EnsureAcceptHeaderInterceptor } from './shared/ensure-accept-header-interceptor';
import { AddAuthorizationHeaderInterceptor } from './shared/add-authorization-header-interceptor';
import { RedirectSilentRenewComponent } from './signin-utilities/redirect-silent-renew/redirect-silent-renew.component';
import { SigninOidcComponent } from './signin-utilities/signin-oidc/signin-oidc.component';
import { ErrorInterceptor } from './shared/error-interceptor';
import { RideDetailsComponent } from './rides/ride-details/ride-details.component';


@NgModule({
   declarations: [
      AppComponent,
      RideListComponent,
      HomepageComponent,
      SigninOidcComponent,
      ProfileComponent,
      RedirectSilentRenewComponent,
      RideDetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AddAuthorizationHeaderInterceptor,
         multi: true
      },
      {
         provide: HTTP_INTERCEPTORS,
         useClass: EnsureAcceptHeaderInterceptor,
         multi: true
      },
      {
         provide: HTTP_INTERCEPTORS,
         useClass: ErrorInterceptor,
         multi: true
      }
      // OpenIdConnectService,
      // RequiredAuthenticatedRouteGuardService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
