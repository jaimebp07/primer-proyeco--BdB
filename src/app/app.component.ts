import { Component } from '@angular/core';
import { faXbox } from '@fortawesome/free-brands-svg-icons';
import { Customer, CustomersService } from './services/customers.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primer-proyecto-BdB';
  faXboxicon = faXbox;
  arrayCustomersDataDB: Customer[] = new Array();
  
  constructor(
    private customerService: CustomersService
  ) {
    this.readDataCustomers();
  }

  readDataCustomers() {
    this.customerService.getCustomers$().subscribe(customersDB => {
      this.arrayCustomersDataDB = customersDB;
      let arrayCustomersData = new Array();
      console.log("this.arrayCustomersDataDB - dentro --> ", this.arrayCustomersDataDB)
      for (let i = 0; i < this.arrayCustomersDataDB.length; i++) {
        let objectCustomerData = {
          "personalData": {
            "names": this.arrayCustomersDataDB[i]["customer_names"],
            "surnames": this.arrayCustomersDataDB[i]["customer_surnames"],
            "placeOfBirth": this.arrayCustomersDataDB[i]["place_of_birth"]
          },
          "financialData": {
            "spouseIncome": this.arrayCustomersDataDB[i]["monthly_income"],
            "spouseExpenses": this.arrayCustomersDataDB[i]["monthly_expense"],
            "spouseAsset": this.arrayCustomersDataDB[i]["active_spouse"],
            "spouseLiabilities": this.arrayCustomersDataDB[i]["pasive_spouse"]
          }
        }
        arrayCustomersData.push(objectCustomerData)
      }
      localStorage.setItem("arrayObjectClientData", JSON.stringify(arrayCustomersData));
    })
  }
}
