import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenIdConnectService } from 'src/app/_services/OpenIdConnect.service';

@Component({
  selector: 'app-signin-oidc',
  templateUrl: './signin-oidc.component.html',
  styleUrls: ['./signin-oidc.component.css']
})
export class SigninOidcComponent implements OnInit {

  constructor(private openIdConnectService: OpenIdConnectService,
    private router: Router) { }

  ngOnInit() {
    // usign the subscribe for the ReplaySubject to make to not navigate to the route untill make sure the user is loaded
    // to avoid the flicker.
    this.openIdConnectService.userLoaded$.subscribe((userLoaded) => {
      if (userLoaded) {
        this.router.navigate(['./']);
      } else {
        console.log('An error happened: user falied to loaded.');
      }
    });
    this.openIdConnectService.handleCallBack();

  }

}
