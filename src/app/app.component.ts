import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from 'roman-numerals';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  romanNumberValue = new FormControl('');
  arabicNumberValue = new FormControl('');
  arabicResult= '';
  romanResult: any;

  constructor(private romanNumeralService: RomanNumeralsService) {
  }

  ngOnInit(): void {}

  submitNumber() {
    this.arabicResult = this.romanNumeralService.arabicToRoman(this.romanNumberValue.value)
  }

  submitRoman() {
    this.romanResult = this.romanNumeralService.romanToArabic(this.arabicNumberValue.value)
  }

}
