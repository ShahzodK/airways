import { createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/search.actions'
import { ISearchState } from '../search.model';

export const initialState: ISearchState = {
  flight: {
    flight_name: '',
    flight_no: '',
    seats_amount: 0,
    columns: 0,
    rows: [],
    dates: [{
      date: new Date(),
      prices: {
        adult: '',
        child: '',
        infant: ''
      }
    }]
  },
  searchForm: {
    tripType: '',
    departure: '',
    destination: '',
    start: new Date(),
    end: new Date(),
    passengers: []
  }
}

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.sendSearchFormSuccess, (state, { flight }): ISearchState => ({
    ...state,
    flight
  })),
  on(SearchActions.saveSearchForm, (state, { searchForm }): ISearchState => ({
    ...state,
    searchForm
  }))
)
