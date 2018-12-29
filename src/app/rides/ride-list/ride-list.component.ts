import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrip } from 'src/app/_models/trip';
import { TripService } from 'src/app/_services/trip.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {

  trips: ITrip[] = [];
  pageTitle = 'Trips';
  errorMessage;

  constructor(private tripService: TripService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tripService.getTrips().subscribe(
      resultTrips => this.trips = resultTrips,
      error => this.errorMessage = error
    );
  }
  goToRide(trip :ITrip) {
    this.router.navigate([trip.rideId], { relativeTo: this.route });
  }
}
