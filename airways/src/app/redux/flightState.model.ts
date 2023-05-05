import { IFlights } from '../shared/models/flights.model';

export interface IFlightsState {
  flights: IFlights[],
  flights_name: string[]
}
