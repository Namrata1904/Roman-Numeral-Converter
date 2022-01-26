import { Injectable } from '@angular/core';

const MIN_NUMERAL = 0;
const MAX_NUMERAL = 4000;
const REGEX_ROMAN_RULE = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

@Injectable({
  providedIn: 'root'
})

export class RomanNumeralsService {

  constructor() { }

  public arabicToRoman(num: number) {
    const checkNum = num.toString();
    const valid = checkNum.match(/^(0|[1-9]\d*)$/);
    if (!valid) {
      return 'Please enter positive arabic number and without decimals';
    }
    if (num < MAX_NUMERAL && num > MIN_NUMERAL) {
      const romanSymbol: any = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
      };
      let roman = [];
      const romanKeys = Object.keys(romanSymbol);
      let currentValue: any;
      let index;
      let count = 1;

      for (const numeral in romanSymbol) {
        currentValue = romanSymbol[numeral];
        index = romanKeys.indexOf(numeral);
        /* To check if the num passed for conversion is greater than the current value */
        while (num >= currentValue) {
          /* Since we cannot repeat same symbol for more than 3 times */
          if (count < 4) {
            roman.push(numeral);
          } else {
            /* To check if previous value present */
            if (roman.indexOf(romanKeys[index - 1]) > -1) {
              /* To remove the symbols before the repeated ones since it might be a part of the current number */
              roman.splice(roman.indexOf(romanKeys[index - 1]));
              /* To make use of substraction logic in roman number since addition did not fit*/
              roman.push(romanKeys[index], romanKeys[index - 2]);
            } else {
              /* To remove 3 same numerals */
              roman.splice(-3);
              roman.push(romanKeys[index], romanKeys[index - 1]);
            }
          }
          /* After pushing the symbol we need to deduct that value from the num and increment the counter*/
          num -= currentValue;
          count++;
        }
        /* Once the num becomes less than the current value we reset the counter and take the next symbol */
        count = 1;
      }
      return roman.join("");
    }
    else {
      return 'Please enter a valid arabic number between 0 to 4000';
    }
  }

  public romanToArabic(roman: string) {
    const romanSymbol = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    /* To check if the entered number is roman number and is less than MMMM and based on the rules */
    if (typeof (roman) !== 'string') {
      return 'Please enter a Roman number';
    }
    const valid = roman.match(REGEX_ROMAN_RULE);
    if (!valid) {
      return 'Please enter valid Roman number and less than MMMM';
    }

    let outputNumber: any = [];
    let result = 0;
    let firstNum = 0;
    let secondNum = 0;

    /* To split the input roman string into array */
    let romanNum = roman.split('');

    /* To get the numbers equivalent to the roman numbers */
    romanNum.forEach((item) => {
      for (const [key, value] of Object.entries(romanSymbol)) {
        if (item === key) {
          outputNumber.push(value);
        }
      }
    })

    /* To check if single element */
    if (outputNumber.length === 1) {
      result = outputNumber[0];
      return result;
    }

    /* To compare the initial numbers based on rules if first number greater than second add the numbers
    else substract the second from first, then overall add the result */
    firstNum = outputNumber.shift();
    let outputLength = outputNumber.length;
    for (let i = 0; i < outputLength; i++) {
      secondNum = outputNumber.shift();
      /* If firstNum greater or equal then add and move ahead in the array until the last is reached */
      if (firstNum >= secondNum) {
        result += firstNum;
        firstNum = secondNum;
        if ((i + 1) === outputLength) {
          result += firstNum;
        }
      } /* If firstNum less then second then substract and add to result move ahead until the last is reached */
      else {
        result += (secondNum - firstNum);
        if ((i + 2) === outputLength && outputLength === 1) {
          firstNum = outputNumber.shift();
          result += firstNum;
        }
        if ((i + 2) < outputLength) {
          firstNum = outputNumber.shift();
        }
        i++;
      }
    }
    return result;
  }
}
