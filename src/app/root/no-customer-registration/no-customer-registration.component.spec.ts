import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCustomerRegistrationComponent } from './no-customer-registration.component';

describe('NoCustomerRegistrationComponent', () => {
  let component: NoCustomerRegistrationComponent;
  let fixture: ComponentFixture<NoCustomerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCustomerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCustomerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
