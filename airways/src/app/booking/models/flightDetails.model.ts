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
