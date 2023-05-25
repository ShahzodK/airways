import { Component, Input } from '@angular/core';

import { IFlightDetails } from 'app/booking/models/flightDetails.model';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  @Input() flightDetails!: IFlightDetails;
}
