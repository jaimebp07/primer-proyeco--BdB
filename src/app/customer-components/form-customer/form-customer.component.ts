import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private readonly fb: FormBuilder){
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
    // console.log("values", values);
    console.log('Form ->', this.customerForm.value);
    console.log("customerForm: ", this.customerForm.value);
  }

  validateAge() {
    this.currentAge = (this.currentYear - this.year);

    if((this.currentAge >= 17 ) && (this.year < this.currentYear) && (this.year > 1900)){
      if(this.currentAge > 17){
        this.isOlder = true;
        console.log("Es mayor de edad")
      } else {
        if(this.month < this.currentMonth){
          this.isOlder = true;
          console.log("Es mayor de edad")
        } else {
          if(this.day < this.currentDay){
            this.isOlder = true;
            console.log("Es mayor de edad")
          }
        }
      }
      
    }
    
  }
}

