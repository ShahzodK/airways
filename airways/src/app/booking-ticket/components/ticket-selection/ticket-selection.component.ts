import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchFlight, selectSearchForm } from 'app/redux/selectors/flights.selectors';
import { IDate } from 'app/shared/models/date.model';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-ticket-selection',
  templateUrl: './ticket-selection.component.html',
  styleUrls: ['./ticket-selection.component.scss']
})
export class TicketSelectionComponent implements OnInit  {

  constructor(
              private store: Store,
              private elementRef: ElementRef,
              private renderer: Renderer2) {}

  public searchFlight$ = this.store.select(selectSearchFlight);

  public searchForm$ = this.store.select(selectSearchForm);

  public flightDates: {departures: any[], destinations: any[]} = {
    departures: [],
    destinations: []
  };

  public isDepartureTicketSelected = false;

  public isDestinationTicketSelected = false;

  ngOnInit(): void {
    combineLatest([this.searchFlight$, this.searchForm$])
    .pipe(
      map(([searchFlight, searchForm]) => {
        const startDate: IDate[] = JSON.parse(JSON.stringify(searchFlight[0].dates));
        const endDate: IDate[] = JSON.parse(JSON.stringify(searchFlight[1].dates));
        const startDates: {date: Date, price?: string, departure_time?: string, arrival_time?: string, duration?: string, disabled?: boolean}[] = this.addDates(searchForm.start!);
        const endDates: {date: Date, price?: string, departure_time?: string, arrival_time?: string, duration?: string, disabled?: boolean}[] = this.addDates(searchForm.end!)
        startDates.map((date) => {
          startDate.forEach((flightDates, i) => {
            if(date.date.getTime() == new Date(flightDates.date).getTime()) {
              delete startDate[i];
              date.price = flightDates.prices.adult;
              date.departure_time = flightDates.departure_time;
              date.arrival_time = flightDates.arrival_time;
              date.duration = flightDates.duration;
            }
            else {
              date.price = date.price ? date.price : ' ';
            }
          });
          return date
        })
        endDates.map((date) => {
          endDate.forEach((flightDates, i) => {
            if(date.date.getTime() == new Date(flightDates.date).getTime()) {
              delete endDate[i];
              date.price = flightDates.prices.adult;
              date.departure_time = flightDates.departure_time;
              date.arrival_time = flightDates.arrival_time;
              date.duration = flightDates.duration;
            }
            else {
              date.price = date.price ? date.price : ' ';
            }
          });
          return date
        })
        return [startDates, endDates]
      })
    ).subscribe((dates) => {
       this.flightDates.departures = dates[0];
       this.flightDates.destinations = dates[1];
       this.flightDates.departures.map((departure) => {
        if(departure.price == ' ') {
          console.log(2);
           departure.disabled = true;
        }
        else departure.disabled = false;
       })
       this.flightDates.destinations.map((destination) => {
        if(destination.price == ' ') {
          console.log(1);
           destination.disabled = true;
        }
        else destination.disabled = false;
       })
      });

    // combineLatest([this.searchFlight$, this.searchForm$])
    // .pipe(
    //   map(([searchFlight, searchForm]) => {
    //     console.log(searchFlight)
    //     return flight
    //   })
    // ).subscribe((flight, list) => {
    //   console.log(list);
    //   flight[0].dates.filter((date) => {
    //     date == search
    //   })
    //   this.flightDates = flight[0].dates;
    // })
  }
  // new Date('2023-05-10T12:00:00Z')

  public addDates(date: Date) {
    const givenDate = date;

    const datesBefore = Array.from(Array(5),  (_, i) => {
      const daysToAdd = i;
      const resDate = new Date(givenDate);
      resDate.setDate(resDate.getDate() - daysToAdd);
      return {date: resDate};
    });

    const datesLater = Array.from(Array(5),  (_, i) => {
      const daysToAdd = i;
      const resDate = new Date(givenDate);
      resDate.setDate(resDate.getDate() + daysToAdd + 1);
      return {date: resDate};
    });

    return [datesBefore.reverse(), datesLater].flat(1)
  }

  public selectTicket(direction: string) {
    let tabLabel
    if(direction == 'departure') {
       tabLabel = this.elementRef.nativeElement.querySelectorAll('mat-tab-header')[0];
       this.isDepartureTicketSelected = true;
    }
    else if(direction == 'destination') {
       tabLabel = this.elementRef.nativeElement.querySelectorAll('mat-tab-header')[1];
       this.isDestinationTicketSelected = true;
    }
    this.renderer.setStyle(tabLabel, 'display', 'none')
  }

  public getPrice(destination: any) {
      if(destination.price !== ' ' || destination.price !== '') {
        console.log(destination);
        console.log(1);
         return false;
      }
      else {
        console.log('2');
        return true;
      }
    // console.log(destination)
  }
}
