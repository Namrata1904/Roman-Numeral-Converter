# Roman-Numeral-Converter
An app to convert roman numeral to arabic numeral and vice versa.

USAGE GUIDE:

Prerequisite - Node.js, Angular CLI

Instruction to run the Library roman-numerals: \Roman-Numeral-Converter\projects\roman-numerals
1. ng build roman-numerals
2. npm publish
3. Import the library's service RomanNumeralsService in the component required.

Instruction to run the application:
1. npm install
2. ng serve
3. Access the application on http://localhost:4200/

Additional Notes:
1. Testing - Testcases can be run from inside \Roman-Numeral-Converter\projects\roman-numerals\ with command below 
	ng test roman-numerals

2. Extensibility - If a new Roman numeral is added make changes as below:
	- \Roman-Numeral-Converter\projects\roman-numerals\src\lib\roman-numerals.service.ts
	change the constants MAX_NUMERAL, REGEX_ROMAN_RULE and romanSymbol as per requirement.
	







