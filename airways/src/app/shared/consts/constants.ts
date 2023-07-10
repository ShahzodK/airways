import { MatDateFormats } from '@angular/material/core';

export const api = 'https://bored-puce-seahorse.cyclic.app/';

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: new Date(),
  },
  display: {
    dateInput: 'YYYY.MM.DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'YYYY.MM.DD',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
