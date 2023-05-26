import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatParamService {
  dateFormat = 'MM/dd/YYYY';

  currency = 'EUR';

  getIndex() {
    if (this.currency === 'USD') return 1.1;
    else if (this.currency === 'RUB') return 86;
    else if (this.currency === 'PLN') return 4.5;
    return 1;
  }
}
