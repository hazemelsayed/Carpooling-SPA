import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Carpooling-SPA';
  ridesList: any;


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.ridesList = this.getRidesList();
  }

  getRidesList(): any {
    this.httpClient.get('http://localhost:5201/api/values/').subscribe(
      response => {
        this.ridesList = response;
      }, error => {
        console.log(error);
      });
    }
}
