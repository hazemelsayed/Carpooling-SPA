export interface ITrip {
  rideId: string;
  creationDate;
  travelStartDate;
  applicationUserCarID: number;
  sourceCityID;
  destinationCityID;
  seatsOffered: number;
  requests;
  bufferTimeID;
  enrouteCities: [];
  updatedDate;
  createdDate;
}
