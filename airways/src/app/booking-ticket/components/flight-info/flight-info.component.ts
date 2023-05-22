import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchForm } from 'app/redux/selectors/flights.selectors';
import { MainService } from 'app/search/services/main.service';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent {
  public searchForm$ = this.store.select(selectSearchForm);


  constructor(
              private store: Store,
              public mainService: MainService
             ) {}

}
