import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {Portal} from './portal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {RecaptchaModule} from 'ng-recaptcha';

import { MAT_DATE_LOCALE } from '@angular/material/core'  

import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';
import { StartNowComponent } from './components/start-now/start-now.component';

@NgModule({
  declarations: [Portal, AppComponent, StartNowComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    RecaptchaModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
