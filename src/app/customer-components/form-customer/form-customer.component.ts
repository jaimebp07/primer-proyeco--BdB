import { Component } from '@angular/core';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent {

  onSubmit(values:any){
    console.log("values", values);
  }

  addCustomerNames(names:string){
    console.log("Pora Acaaaa")
    console.log("Los nombres son: ", names)
  }
}
