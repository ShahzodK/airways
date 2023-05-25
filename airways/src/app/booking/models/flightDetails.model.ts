export interface IFlightDetails {
  number: string | undefined;
  direction: string;
  date: Date | undefined;
  time: string;
}

export interface IPassengersDetails {
  fullName: string;
  seat: string;
}
