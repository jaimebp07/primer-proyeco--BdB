import { Component } from '@angular/core';
import { Customer, CustomersService } from '../../services/customers.service'
import { FinancialDataService } from '../../services/financial-data.service'
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
    private financialDataService: FinancialDataService

  ) {
    this.showCustomers()
    // this.readDataCustomers();
    // this.readDataFinancial();
    // console.log("this.arrayCustomersDataDB[0] ---> ", this.arrayCustomersDataDB)
    // if (this.arrayCustomersDataDB[0] != null && this.arrayFinancialDataDB[0] != null) {
    //   this.areRegisteredCustomers = true;
    //   // this.arrayFinancialDataDB[0]["monthly_income"]
    //   console.log("Hay info en la base de datos")

    // } else {
    //   console.log("Info de la base de datos defectuosa o vacia")
    //   this.showCustomers()
    // }
  }



  // constructor(private http:HttpClient){
  // }

  readDataCustomers(): any {
    this.customerService.getCustomers$().subscribe(customersDB => {
      this.arrayCustomersDataDB = customersDB;
      console.log("this.arrayCustomersDataDB - dentro --> ", this.arrayCustomersDataDB)
    })
    console.log("this.arrayCustomersDataDB fuera> ", this.arrayCustomersDataDB);
    // this.customerService.getCustomers().subscribe(resp => {
    //   console.log("dentro del suscribe - resp --> ", resp)
    //   this.arrayCustomersDataDB = resp;
    // });
    // console.log("saliendo del suscribe this.arrayCustomersDataDB ", this.arrayCustomersDataDB);
    // console.log("varrr  ---> ", rr )
    // return rr;
  }

  readDataFinancial() {
    this.financialDataService.getFinancialData().subscribe(resp => {
      this.arrayFinancialDataDB = resp;
    })
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
    // for(let customer of this.arrayCustomersDataDB){
    //   item
    // }

    // console.log("this.arrayCustomersData --> ", this.arrayCustomersData)

    // this.customerService.getCustomers().subscribe(resp => {
    //   console.log("HOLA -------------------------")
    //   console.log("resp --> ", resp)
    //   console.log("Values --> ", resp[0]["customer_names"])
    //   for (let customer of resp) {
    //     console.log("customer --> ", customer["customer_names"])
    //   }

    //   // customer_names
    //   // if (resp != null) {
    //   //   this.areRegisteredCustomers = true;
    //   //   this.arrayCustomersData = resp;
    //   // }
    // })
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