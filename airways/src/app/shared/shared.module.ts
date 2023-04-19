import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
