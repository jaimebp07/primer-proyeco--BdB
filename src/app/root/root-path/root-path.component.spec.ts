import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RootPathComponent } from './root-path.component';
import { CustomersService, Customer } from '../../services/customers.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GeneralHeaderComponent } from 'src/app/general/general-header/general-header.component';
import { CaptionComponent } from 'src/app/general/caption/caption.component';
import { BlueButtonComponent } from 'src/app/general/blue-button/blue-button.component';
import { NoCustomerRegistrationComponent } from '../no-customer-registration/no-customer-registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


describe('RootPathComponent', () => {
  let component: RootPathComponent;
  let fixture: ComponentFixture<RootPathComponent>;
  let customerService: jasmine.SpyObj<CustomersService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CustomersService', ['getCustomers$']);

    TestBed.configureTestingModule({
      declarations: [
        RootPathComponent, 
        GeneralHeaderComponent, 
        CaptionComponent, 
        BlueButtonComponent,
        NoCustomerRegistrationComponent
      ],
      providers: [
        { provide: CustomersService, useValue: spy },
        { provide: ActivatedRoute, useValue: {} }
      ],
      imports: [ HttpClientTestingModule, FontAwesomeModule, RouterModule, CommonModule ]
    }).compileComponents();

    customerService = TestBed.inject(CustomersService) as jasmine.SpyObj<CustomersService>;
    fixture = TestBed.createComponent(RootPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should read data customers from service', () => {
    const customers: Customer[] = [
      { customer_names: 'John', customer_surnames: 'Doe', place_of_birth: 'New York', customer_day_of_birth: 4, customer_month_of_birth:12, customer_year_of_birth:1998, monthly_income: 5000000, monthly_expense: 6000000, active_spouse: 50000000, pasive_spouse:4000000 }
    ];
    
    customerService.getCustomers$.and.returnValue(of(customers));
    component.readDataCustomers();
    expect(component.arrayCustomersDataDB).toEqual(customers);
  });

});