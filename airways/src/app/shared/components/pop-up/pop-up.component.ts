import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  constructor(public snackBar: MatSnackBar) {}

  showPopUp(): void {
    this.snackBar.openFromComponent(PopUpComponent, { duration: 6000 });
  }
}
