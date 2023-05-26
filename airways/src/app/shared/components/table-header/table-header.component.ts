import { Component, Input } from '@angular/core';

import { IOrder } from 'app/booking/models/flightDetails.model';
import { FormatParamService } from 'app/core/services/format-param.service';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
})
export class TableHeaderComponent {
  @Input() orders!: IOrder[];

  constructor(public format: FormatParamService) {}
}
