import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-financial',
  templateUrl: './form-financial.component.html',
  styleUrls: ['./form-financial.component.css']
})
export class FormFinancialComponent {
  financialForm!: FormGroup;
  // arrayCustomersData: string[] = new Array();

  constructor(private readonly fb: FormBuilder) {
    this.financialForm = this.fb.group({
      spouseIncome: ['', [Validators.required, Validators.minLength(3)]],
      spouseExpenses: ['', [Validators.required, Validators.minLength(3)]],
      spouseAsset: ['', [Validators.required, Validators.minLength(3)]],
      spouseLiabilities: ['', [Validators.required, Validators.minLength(1)]],
    })
  }

  sendCorrectInfo(): void {
    
    let arrayCustomersData = new Array();

    if(localStorage.getItem("arrayObjectClientData") != null){
      arrayCustomersData = JSON.parse(""+localStorage.getItem("arrayObjectClientData"));
    } else {
      console.log("ES NULO ---------------- ");
    }
    
    const financialData = this.financialForm.value;
    let objectCustomerData = {"personalData": JSON.parse(""+sessionStorage.getItem('customer-form')), "financialData":financialData}
    // console.log("objectClientData --> ", objectCustomerData)
    arrayCustomersData.push(objectCustomerData)
    localStorage.setItem("arrayObjectClientData", JSON.stringify(arrayCustomersData));
    // console.log("this.arrayCustomersData[0]  --> ", arrayCustomersData[0]);
  }

  getStorageInfo<T>(key: string): T | null {
    const dataCustomer = localStorage.getItem(key);
    if (dataCustomer !== null) {
      return JSON.parse(dataCustomer) as T
    }
    return null;
  }

  onSubmit(){
    console.log("hola on submit")
  }

  setInputSpouseIncome(newItem: string){
    this.financialForm.controls['spouseIncome'].setValue(newItem);
  }

  setInputSpouseExpenses(newItem: string){
    this.financialForm.controls['spouseExpenses'].setValue(newItem);
  }

  setInputSpouseAsset(newItem: string){
    this.financialForm.controls['spouseAsset'].setValue(newItem);
  }

  setInputSpouseLiabilities(newItem: string){
    this.financialForm.controls['spouseLiabilities'].setValue(newItem);
  }
}