import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pop-up-auth',
  templateUrl: './pop-up-auth.component.html',
  styleUrls: ['./pop-up-auth.component.scss'],
})
export class PopUpAuthComponent {
  constructor(public snackBar: MatSnackBar) {}

  showPopUpAuth(): void {
    this.snackBar.openFromComponent(PopUpAuthComponent, { duration: 6000 });
  }
}
