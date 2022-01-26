import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumeralsComponent } from './roman-numerals.component';

describe('RomanNumeralsComponent', () => {
  let component: RomanNumeralsComponent;
  let fixture: ComponentFixture<RomanNumeralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanNumeralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumeralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
