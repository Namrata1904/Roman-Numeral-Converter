import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from './roman-numerals.service';

@Component({
  selector: 'lib-roman-numerals',
  template: ``,
  styles: [
  ]
})

export class RomanNumeralsComponent implements OnInit {

  constructor(private romanNumeralService: RomanNumeralsService) { }

  ngOnInit(): void {}

}
