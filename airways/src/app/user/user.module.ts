import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { UserCartPagesComponent } from './pages/user-cart-pages/user-cart-pages.component';

@NgModule({
  declarations: [UserCartPagesComponent],
  imports: [CommonModule, SharedModule],
  exports: [],
})
export class UserModule {}
