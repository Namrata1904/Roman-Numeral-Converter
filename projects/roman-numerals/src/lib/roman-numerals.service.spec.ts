import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('On calling arabicToRoman()', () => {
    it('should expect error msg', () => {
      const spy = service.arabicToRoman(4000);
      expect(spy).toEqual('Please enter a valid number between 0 to 4000');
    });

    it('should expect MCMXCVIII', () => {
      const spy = service.arabicToRoman(1998);
      expect(spy).toEqual('MCMXCVIII');
    });

    it('should expect XLVI', () => {
      const spy = service.arabicToRoman(46);
      expect(spy).toEqual('XLVI');
    });

    it('should expect DCCCXCV', () => {
      const spy = service.arabicToRoman(895);
      expect(spy).toEqual('DCCCXCV');
    });

    it('should expect MMMCMXCIX', () => {
      const spy = service.arabicToRoman(3999);
      expect(spy).toEqual('MMMCMXCIX');
    });
  })

  describe('On calling romanToArabic()', () => {
    it('should expect error msg for valid roman number', () => {
      const spy = service.romanToArabic('MMMM');
      expect(spy).toEqual('Please enter valid Roman number less than MMMM');
    });

    it('should expect error msg', () => {
      const spy = service.romanToArabic('CCCHHH');
      expect(spy).toEqual('Please enter valid Roman number less than MMMM');
    });

    it('should expect 2798', () => {
      const spy = service.romanToArabic('MMDCCXCVIII');
      expect(spy).toEqual(2798);
    });

    it('should expect 35', () => {
      const spy = service.romanToArabic('XXXV');
      expect(spy).toEqual(35);
    });

    it('should expect 987', () => {
      const spy = service.romanToArabic('CMLXXXVII');
      expect(spy).toEqual(987);
    });

    it('should expect 3679', () => {
      const spy = service.romanToArabic('MMMDCLXXIX');
      expect(spy).toEqual(3679);
    });
  })

});
