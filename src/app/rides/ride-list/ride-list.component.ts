import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrip } from 'src/app/_models/trip';
import { TripService } from 'src/app/_services/trip.service';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {

  trips: ITrip[] = [];
  pageTitle = 'Trips';
  errorMessage;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrips().subscribe(
      resultTrips => this.trips = resultTrips,
      error => this.errorMessage = error
    );
  }
}
