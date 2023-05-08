import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  isColorScheme$ = new BehaviorSubject(true);

  isColorScheme: Observable<boolean>;

  constructor() {
    this.isColorScheme = this.isColorScheme$.asObservable();
  }

  changeScheme() {
    if (this.isColorScheme$.getValue()) {
      this.isColorScheme$.next(false);
    } else {
      this.isColorScheme$.next(true);
    }
  }
}
