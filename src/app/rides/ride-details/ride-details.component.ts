import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/_models/trip';
import { TripService } from 'src/app/_services/trip.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  pageTitle = 'Ride Details';
  tripId: string;
  currentTrip: ITrip;
  errorMessage;

  constructor(private tripService: TripService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // get the ID
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tripId = params.get('id');
    });

    // Get the trip
    this.tripService.getTripById(this.tripId).subscribe(
      resultTrip => this.currentTrip = resultTrip, 
      error => this.errorMessage = error
    )
  }
  counter(i: number) {
    return new Array(i);
  }
  isPrimary(i: number) {
    if( i > this.currentTrip.requests.length - 1) {
      return false;
    }
    return true;
  }
  backToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
