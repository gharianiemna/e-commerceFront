import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class UserModule { }
