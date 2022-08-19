import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import {FormControl, FormsModule, Validators} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  exports:  [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class LoginModule { }
