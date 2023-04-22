import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PassengerCounterComponent } from './components/passenger-counter/passenger-counter.component';
import { TotalPassengersPipe } from './pipes/totalPassengers.pipe';



@NgModule({
  declarations: [
    MainPageComponent,
    PassengerCounterComponent,
    TotalPassengersPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    MainPageComponent,
  ]
})
export class SearchModule { }
