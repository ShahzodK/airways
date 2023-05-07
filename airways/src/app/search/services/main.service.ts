import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { api } from 'app/shared/consts/constants';
import { IFlights } from 'app/shared/models/flights.model';
import { ISearchForm } from '../models/searchForm.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {}

  public adultCount = 0;

  public childCount = 0;

  public infantCount = 0;

  public passengers: string[] = [];

  public getFlightsName(): Observable<string[]> {
    return this.http.get<string[]>(`${api}/flights_name`);
  }

  public searchFlight(flight: ISearchForm): Observable<IFlights> {
    return this.http.get<IFlights>(`${api}/flights?departure=${flight.departure}&destination=${flight.destination}`)
  }
}
