import { Component } from '@angular/core';

@Component({
  selector: 'app-root-path',
  templateUrl: './root-path.component.html',
  styleUrls: ['./root-path.component.css']
})
export class RootPathComponent {
  areRegisteredCustomers: boolean = false;
  arrayCustomersData = new Array();

  constructor() {
    this.showCustomers()
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