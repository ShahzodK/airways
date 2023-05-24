import { ISearchForm } from 'app/search/models/searchForm.model';
import { IFlights } from '../shared/models/flights.model';
import { ITicket } from 'app/booking-ticket/models/ticket.model';

export interface IFlightsState {
  flights: IFlights[],
  flights_name: string[],
  flight: IFlights[];
  searchForm: ISearchForm,
  selectedTickets: {departure: ITicket, destination?: ITicket}
}
