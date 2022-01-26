import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RomanNumeralsModule } from 'projects/roman-numerals/src/public-api';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RomanNumeralsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
