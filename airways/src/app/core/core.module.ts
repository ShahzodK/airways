import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, StepperComponent],
  imports: [CommonModule, SharedModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
