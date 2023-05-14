import { Component } from '@angular/core';
import { Customer, CustomersService } from '../../services/customers.service'
@Component({
  selector: 'app-root-path',
  templateUrl: './root-path.component.html',
  styleUrls: ['./root-path.component.css'],
  providers: [CustomersService],
})
export class RootPathComponent {
  areRegisteredCustomers: boolean = false;
  arrayCustomersData = new Array();
  arrayFinancialDataDB = new Array();
  arrayCustomersDataDB: Customer[] = new Array();

  constructor(
    private customerService: CustomersService,

  ) {
    this.showCustomers()
  
  }

  readDataCustomers(): any {
    this.customerService.getCustomers$().subscribe(customersDB => {
      this.arrayCustomersDataDB = customersDB;
      console.log("this.arrayCustomersDataDB - dentro --> ", this.arrayCustomersDataDB)
    })
    console.log("this.arrayCustomersDataDB fuera> ", this.arrayCustomersDataDB);
  }

  showCustomersDB() {
    for (let i = 0; i < this.arrayCustomersDataDB.length; i++) {
      let objectCostomer = {
        "personalData": {
          "names": this.arrayCustomersDataDB[i]["customer_names"],
          "surnames": this.arrayCustomersDataDB[i]["customer_surnames"],
          "placeOfBirth": this.arrayCustomersDataDB[i]["place_of_birth"]
        },
        "financialData": {
          "spouse-income": this.arrayFinancialDataDB[0]["monthly_income"],
          "spouse-expenses": this.arrayFinancialDataDB[0]["monthly_expense"],
          "spouse-asset": this.arrayFinancialDataDB[0]["active_spouse"],
          "spouse-liabilities": this.arrayFinancialDataDB[0]["pasive_spouse"]
        }
      }
      this.arrayCustomersData.push(objectCostomer);
    }
  }

  showCustomers(this: any) {
    let storage = localStorage.getItem("arrayObjectClientData")
    if (storage != null) {
      this.areRegisteredCustomers = true;
      this.arrayCustomersData = JSON.parse("" + localStorage.getItem("arrayObjectClientData"));
    } else {
      this.areRegisteredCustomers = false;
    }
  }
}