import { Component, OnInit } from '@angular/core';
import { OpenIdConnectService } from '../_services/OpenIdConnect.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userProfile;

  constructor(private openIdConnectService: OpenIdConnectService) {
    this.userProfile = this.openIdConnectService.user.profile;
    console.log('user' + this.userProfile);
    console.log('user' + this.openIdConnectService.user);
   }

  ngOnInit() {
  }

}
