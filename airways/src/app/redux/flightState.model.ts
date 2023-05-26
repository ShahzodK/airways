import { IOrder } from 'app/booking/models/flightDetails.model';
import { IPassengersForm } from 'app/booking/models/passengersForm.model';
import { ITicket } from 'app/booking/models/ticket.model';
import { ISearchForm } from 'app/search/models/searchForm.model';

import { IFlights } from '../shared/models/flights.model';

export interface IFlightsState {
  orders: IOrder[];
  flights: IFlights[];
  flights_name: string[];
  flight: IFlights[];
  searchForm: ISearchForm;
  passengersForm: IPassengersForm;
  selectedTickets: { departure: ITicket; destination?: ITicket };
}
