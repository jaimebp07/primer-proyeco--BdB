import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer, CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-form-financial',
  templateUrl: './form-financial.component.html',
  styleUrls: ['./form-financial.component.css']
})
export class FormFinancialComponent {
  financialForm!: FormGroup;
  // array_customers_offline: Customer[] = new Array();
  // array_customers_offline = useState<any[]>([]);

  constructor(private readonly fb: FormBuilder, private customerService: CustomersService) {
    this.financialForm = this.fb.group({
      spouseIncome: ['', [Validators.required, Validators.minLength(3)]],
      spouseExpenses: ['', [Validators.required, Validators.minLength(3)]],
      spouseAsset: ['', [Validators.required, Validators.minLength(3)]],
      spouseLiabilities: ['', [Validators.required, Validators.minLength(1)]],
    })
  }

  sendCorrectInfo(): void {

    let arrayCustomersData = new Array();

    if (localStorage.getItem("arrayObjectClientData") != null) {
      arrayCustomersData = JSON.parse("" + localStorage.getItem("arrayObjectClientData"));
    } else {
      console.log("ES NULO ---------------- ");
    }

    const financialData = this.financialForm.value;
    let objectCustomerData = { "personalData": JSON.parse("" + sessionStorage.getItem('customer-form')), "financialData": financialData }
    this.insertDB(objectCustomerData);
    arrayCustomersData.push(objectCustomerData)
    localStorage.setItem("arrayObjectClientData", JSON.stringify(arrayCustomersData));
  }

  insertDB(objectCustomerData: { personalData: any; financialData: any; }) {

    console.log("OBJETO PARA ENVIAR POR POST ", objectCustomerData)
    const sendObject: Customer = {
      customer_names: objectCustomerData["personalData"]["names"],
      customer_surnames: objectCustomerData["personalData"]["surnames"],
      place_of_birth: objectCustomerData["personalData"]["placeOfBirth"],
      customer_day_of_birth: objectCustomerData["personalData"]["birthdayDay"],
      customer_month_of_birth: objectCustomerData["personalData"]["birthdayMonth"],
      customer_year_of_birth: objectCustomerData["personalData"]["birthdayYear"],
      monthly_income: objectCustomerData["financialData"]["spouseIncome"],
      monthly_expense: objectCustomerData["financialData"]["spouseExpenses"],
      active_spouse: objectCustomerData["financialData"]["spouseAsset"],
      pasive_spouse: objectCustomerData["financialData"]["spouseLiabilities"]
    }

    this.customerService.addCustomers$(sendObject);
  }

  getStorageInfo<T>(key: string): T | null {
    const dataCustomer = localStorage.getItem(key);
    if (dataCustomer !== null) {
      return JSON.parse(dataCustomer) as T
    }
    return null;
  }

  onSubmit() {
    console.log("hola on submit")
  }

  setInputSpouseIncome(newItem: string) {
    this.financialForm.controls['spouseIncome'].setValue(newItem);
  }

  setInputSpouseExpenses(newItem: string) {
    this.financialForm.controls['spouseExpenses'].setValue(newItem);
  }

  setInputSpouseAsset(newItem: string) {
    this.financialForm.controls['spouseAsset'].setValue(newItem);
  }

  setInputSpouseLiabilities(newItem: string) {
    this.financialForm.controls['spouseLiabilities'].setValue(newItem);
  }
}
