import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';

import { LogInComponent } from './components/log-in/log-in.component';
import { LoginSocialNetworkComponent } from './components/login-social-network/login-social-network.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthPagesComponent } from './pages/auth-pages/auth-pages.component';
import { UserCartPagesComponent } from './pages/user-cart-pages/user-cart-pages.component';

@NgModule({
  declarations: [
    UserCartPagesComponent,
    AuthPagesComponent,
    SignUpComponent,
    LogInComponent,
    LoginSocialNetworkComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [AuthPagesComponent],
})
export class UserModule {}
