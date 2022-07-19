import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { NgxSpinnerModule } from "ngx-spinner"; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxWebstorageModule.forRoot(),  
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
