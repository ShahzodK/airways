import { IFlights } from "app/shared/models/flights.model";
import { ISearchForm } from "../models/searchForm.model";

export interface ISearchState {
  flight: IFlights;
  searchForm: ISearchForm
}
