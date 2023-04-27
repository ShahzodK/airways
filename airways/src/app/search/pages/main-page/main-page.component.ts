import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as FlightsActions from '../../../redux/actions/flights.actions'
import { MainService } from './../../services/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('passengersInput') passengersInput!: ElementRef;

  public passengersInputEl!: HTMLInputElement;

  ngAfterViewInit(): void {
    this.passengersInputEl  = this.passengersInput.nativeElement;
    this.store.dispatch(FlightsActions.fetchFlights())
  }


  constructor(
    public mainService: MainService,
    public store: Store
  ) {}

  public searchForm = new FormGroup({
    tripType: new FormControl<string>(''),
    departure: new FormControl<string>(''),
    destination: new FormControl<string>(''),
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
    passengers: new FormControl<string>('')
  });

  public truncateText(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0,maxLength-4)+'...';
    } else {
      return str;
    }
  }

  public submitForm () {
    console.log(this.searchForm.value)
  }

  public updatePassengers() {
    this.searchForm.patchValue({
      passengers: this.passengersInputEl.value
    })
  }

  public dateFilter(date: Date) {
    return date.getDate() > new Date().getDate() - 1;
  }
}
