import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootPathComponent } from './root/root-path/root-path.component';
import { CustomerRegistrationComponent } from './root/customer-registration/customer-registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlueButtonComponent } from './general/blue-button/blue-button.component';
import { GeneralHeaderComponent } from './general/general-header/general-header.component';
import { CustomerComponent } from './customer-components/customer/customer.component';
import { FormCustomerComponent } from './customer-components/form-customer/form-customer.component';
import { CaptionComponent } from './general/caption/caption.component';
import { RecordFieldComponent } from './general/record-field/record-field.component';
import { DateInformationFieldComponent } from './general/date-information-field/date-information-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinancialComponent } from './financial-components/financial/financial.component';
import { FormFinancialComponent } from './financial-components/form-financial/form-financial.component';
import { NoCustomerRegistrationComponent } from './root/no-customer-registration/no-customer-registration.component';
import { CustomerDataComponent } from './general/customer-data/customer-data.component';

@NgModule({
  declarations: [
    AppComponent,
    RootPathComponent,
    CustomerRegistrationComponent,
    BlueButtonComponent,
    GeneralHeaderComponent,
    CustomerComponent,
    FormCustomerComponent,
    CaptionComponent,
    RecordFieldComponent,
    DateInformationFieldComponent,
    FinancialComponent,
    FormFinancialComponent,
    NoCustomerRegistrationComponent,
    CustomerDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }