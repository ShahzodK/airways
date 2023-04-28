import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFlights } from 'app/shared/models/flights.model';
import { api } from 'app/shared/consts/constants';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {}

  public adultCount = 0;

  public childCount = 0;

  public infantCount = 0;

  public getFlights(): Observable<IFlights[]> {
    return this.http.get<IFlights[]>(`${api}/flights`);
  }
}
