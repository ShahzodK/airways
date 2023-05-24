import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as FlightsActions from '../../../redux/actions/flights.actions'
import { MainService } from './../../services/main.service';
import { selectFlightsName } from 'app/redux/selectors/flights.selectors';
import { ISearchForm } from 'app/search/models/searchForm.model';
import { sendSearchForm } from './../../../redux/actions/flights.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('passengersInput') passengersInput!: ElementRef;

  public passengersInputEl!: HTMLInputElement;

  public isRoundTrip = true;

  public flightsName = this.store.select(selectFlightsName);

  public departures: string[] = [];

  public destinations: string[] = [];

  public flightsNameSub!: Subscription;

  ngOnInit(): void {
    this.store.dispatch(FlightsActions.fetchFlightsName());
    this.flightsNameSub = this.flightsName.pipe(
      map((flightsName) => {
        return flightsName.map((flightName) => {
          const [departure, destination]: string[] = flightName.split('-');
          this.departures.push(departure);
          this.destinations.push(destination);
          return [departure, destination];
        })
      })
    ).subscribe()
  }

  ngAfterViewInit(): void {
    this.passengersInputEl  = this.passengersInput.nativeElement;
  }

  ngOnDestroy(): void {
    this.flightsNameSub.unsubscribe();
  }


  constructor(
    public mainService: MainService,
    public store: Store,
    public router: Router
  ) {}

  public searchForm = new FormGroup({
    tripType: new FormControl<string>('1', {nonNullable: true, validators: Validators.required}),
    departure: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    destination: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    start: new FormControl<Date | null>(null, {nonNullable: true, validators: Validators.required}),
    end: new FormControl<Date | null>(null),
    passengers: new FormControl<string[]>([], {nonNullable: true, validators: Validators.required})
  });

  public truncateText(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0,maxLength-4)+'...';
    } else {
      return str;
    }
  }

  public changeTripType (type: string) {
    switch (type) {
      case 'one':
        this.isRoundTrip = false;
        break;
      case 'round':
        this.isRoundTrip = true;
    }
  }

  public submitForm () {
    if(this.searchForm.valid) {
      const formValue: ISearchForm = this.searchForm.getRawValue();
      formValue.passengers = this.mainService.passengers.map(item => item.trim());
      this.store.dispatch(sendSearchForm({flight: formValue}));
      setTimeout(() => {
        this.router.navigate(['/booking-ticket']);
      }, 100);
    }
  }

  public updatePassengers() {
    this.searchForm.patchValue({
      passengers: this.passengersInputEl.value.split('  ')
    })
  }

  public dateFilter(date: Date) {
    return date.getDate() > new Date().getDate() - 1;
  }
}
