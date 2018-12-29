import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RideListComponent } from './rides/ride-list/ride-list.component';
import { RideDetailsComponent } from './rides/ride-details/ride-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequiredAuthenticatedRouteGuardService } from './_guards/required-authenticated-route-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { SigninOidcComponent } from './signin-utilities/signin-oidc/signin-oidc.component';
import { RedirectSilentRenewComponent } from './signin-utilities/redirect-silent-renew/redirect-silent-renew.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'rides', component: RideListComponent, canActivate: [RequiredAuthenticatedRouteGuardService] },
  {path: 'rides/:id', component: RideDetailsComponent, canActivate: [RequiredAuthenticatedRouteGuardService] },
  {path: 'profile', component: ProfileComponent, canActivate: [RequiredAuthenticatedRouteGuardService] },
  {path: 'signin-oidc', component: SigninOidcComponent},
  {path: 'redirect-silentrenew', component: RedirectSilentRenewComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
