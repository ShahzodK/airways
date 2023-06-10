export interface IFlightDetails {
  number: string | undefined;
  direction: string;
  date: Date | undefined;
  time: string;
}

export interface IPassengersDetails {
  fullName: string;
  baggage: boolean;
  seat: string | null;
}

export interface ICostTrip {
  count: string;
  type: string;
  fare: number;
  tax: number;
  total: number;
}

export interface IOrder {
  number: string;
  departure: string;
  destination: string;
  type: string;
  dateDeparture: Date;
  timeDeparture: string;
  dateDestination: Date | null | undefined;
  timeDestination: string | null;
  passengers: {
    Adults: string;
    Children: string;
    Infants: string;
  };
  price: number;
  flightDetailsDeparture?: IFlightDetails;
  passengersDetailsDeparture?: IPassengersDetails[];
  flightDetailsDestination?: IFlightDetails | null;
  passengersDetailsDestination?: IPassengersDetails[] | null;
  costTrip?: ICostTrip[];
}
