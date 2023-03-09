import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/storage/local-storage.service';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent {
  customerForm!: FormGroup;
  currentDate: Date = new Date()
  currentYear: number = this.currentDate.getFullYear()
  currentMonth: number = this.currentDate.getMonth()
  currentDay: number = this.currentDate.getDay()
  year!: number;
  month!: number;
  day!: number;
  isOlder: boolean = false;
  currentAge!: number;

  constructor(private readonly fb: FormBuilder, private _localStorageService: LocalStorageService) {
    this.customerForm = this.fb.group({
      names: ['', [Validators.required, Validators.minLength(3)]],
      surnames: ['', [Validators.required, Validators.minLength(3)]],
      placeOfBirth: ['', [Validators.required, Validators.minLength(3)]],
      birthdayDay: ['', [Validators.required, Validators.minLength(1)]],
      birthdayMonth: ['', [Validators.required, Validators.minLength(1)]],
      birthdayYear: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  onSubmit(): void {
  }

  sendCorrectInfo(): void {
    const dataCustomer = JSON.stringify(this.customerForm.value);
    sessionStorage.setItem('customer-form', dataCustomer)
  }

  getStorageInfo<T>(key: string): T | null {
    const dataCustomer = localStorage.getItem('customer-form');
    if (dataCustomer !== null) {
      return JSON.parse(dataCustomer) as T
    }
    return null;
  }

  sendIncorrectInfo(): void {
    this.customerForm.controls['birthdayYear'].setValue("");
    this.customerForm.controls['birthdayMonth'].setValue("");
    this.customerForm.controls['birthdayDay'].setValue("");
  }

  validateAge() {
    const [d, m, y] = [this.day, this.month, this.year]
    const dateConversion = new Date(`${y}/${m}/${d}`);
    if ("" + dateConversion == "Invalid Date") {
      this.isOlder = false;
    } else {
      this.currentAge = (this.currentYear - this.year);
      if ((this.currentAge >= 17) && (this.year < this.currentYear) && (this.year > 1900)) {
        if (this.currentAge > 17) {
          this.isOlder = true;
        } else {
          if (this.month < this.currentMonth) {
            this.isOlder = true;
          } else {
            if (this.day < this.currentDay && this.day <= 31) {
              this.isOlder = true;
            } else {
              this.isOlder = false;
            }
          }
        }
      } else {
        this.isOlder = false;
      }
    }
  }
}

