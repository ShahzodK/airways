import { IPassengersForm } from 'app/booking/models/passengersForm.model';
import { ISearchForm } from 'app/search/models/searchForm.model';

import { IFlights } from '../shared/models/flights.model';
import { ITicket } from 'app/booking/models/ticket.model';

export interface IFlightsState {
  flights: IFlights[],
  flights_name: string[],
  flight: IFlights[];
  searchForm: ISearchForm,
  passengersForm: IPassengersForm;
  selectedTickets: {departure: ITicket, destination?: ITicket}
}
