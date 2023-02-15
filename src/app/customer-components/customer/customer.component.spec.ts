import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptionComponent } from 'src/app/general/caption/caption.component';
import { GeneralHeaderComponent } from 'src/app/general/general-header/general-header.component';
import { FormCustomerComponent } from '../form-customer/form-customer.component';

import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerComponent, 
        // 
        GeneralHeaderComponent,
        CaptionComponent,
        FormCustomerComponent 
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
