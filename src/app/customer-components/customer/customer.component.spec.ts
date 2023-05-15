import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptionComponent } from 'src/app/general/caption/caption.component';
import { GeneralHeaderComponent } from 'src/app/general/general-header/general-header.component';
import { FormCustomerComponent } from '../form-customer/form-customer.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomerComponent } from './customer.component';
import { BlueButtonComponent } from 'src/app/general/blue-button/blue-button.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
     await TestBed.configureTestingModule({
       imports: [ ReactiveFormsModule, 
        ReactiveFormsModule, 
        RouterModule
      ],
       declarations: [
         CustomerComponent,
         GeneralHeaderComponent,
         CaptionComponent,
         FormCustomerComponent, 
         BlueButtonComponent
       ],
       providers: [
         { provide: ActivatedRoute, useValue: {} }
       ]
     })
     .compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});