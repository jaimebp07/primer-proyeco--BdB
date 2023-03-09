import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, of, Subject } from 'rxjs';

export interface Customer {
  customer_names: string,
  customer_surnames: string,
  place_of_birth: string,
  customer_day_of_birth: number,
  customer_month_of_birth: number,
  customer_year_of_birth: number,
  monthly_income: number,
  monthly_expense: number,
  active_spouse: number,
  pasive_spouse: number
}

@Injectable(
  {
  providedIn: 'root'
  }
)
export class CustomersService {

  private customers: Customer[] = new Array();
  private customer$!: Subject<Customer[]>;
  _url = '/showcustomersdata'

  constructor(
    private http: HttpClient
  ) {
    console.log("SERVICIO CREADO")
    this.customer$ = new Subject();
  }

  getCustomers$(): Observable<Customer[]>{
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    this.http.get('http://localhost:7000/showcustomersdata', {
      headers: headers
    }).subscribe(customersDB => {
      let arrCusromersDB = JSON.parse(JSON.stringify(customersDB))
      for(let customer of arrCusromersDB){
        this.customers.push(customer)
      }
      this.customer$.next(this.customers)
    })
    return this.customer$;
  }

  addCustomers$(customer: Customer) {
    console.log("customer enviado a la Api, ", customer)
   
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    let newCustomer = JSON.parse(JSON.stringify(customer));
    console.log("newCustomer cusromer service ", newCustomer);

    this.http.post<any>('http://localhost:7000/addcustomer', newCustomer, {
      headers: headers
    }).subscribe(data => {
        console.log("data ", data)
    });
  }
}