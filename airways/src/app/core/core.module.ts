import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { LogInComponent } from 'app/user/components/log-in/log-in.component';
import { LoginSocialNetworkComponent } from 'app/user/components/login-social-network/login-social-network.component';
import { SignUpComponent } from 'app/user/components/sign-up/sign-up.component';
import { AuthPagesComponent } from 'app/user/pages/auth-pages/auth-pages.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    StepperComponent,
    AuthPagesComponent,
    SignUpComponent,
    LogInComponent,
    LoginSocialNetworkComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
  exports: [FooterComponent, HeaderComponent],
  providers: [],
})
export class CoreModule {}
