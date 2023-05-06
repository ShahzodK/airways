import { createAction, props } from '@ngrx/store';
import { ISearchForm } from 'app/search/models/searchForm.model';
import { IFlights } from 'app/shared/models/flights.model';

export const sendSearchForm = createAction (
  '[SEARCH] SEND Search Form',
  props<{ flight: ISearchForm }>(),
);

export const sendSearchFormSuccess = createAction (
  '[SEARCH] SEND Search Form Success',
  props<{ flight: IFlights }>(),
)

export const sendSearchFormFailed = createAction (
  '[SEARCH] SEND Search Form Failed'
);

export const saveSearchForm = createAction (
  '[SEARCH] SAVE Search Form',
  props<{ searchForm: ISearchForm }>(),
)