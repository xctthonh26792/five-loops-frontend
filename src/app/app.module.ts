import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ApisModule } from './apis';
import { ServicesModule } from './services';
import { HomeModule } from './modules/home/home.module';
import { AmazingTimePickerModule } from './plugins/amazing-time-picker';

import { NgxMaskModule } from './plugins/ngx-mask';
import { NgxSummernoteModule } from './plugins/ngx-summernote'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    ApisModule.forRoot(),
    ServicesModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxSummernoteModule.forRoot(),
    HomeModule,
    AmazingTimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
