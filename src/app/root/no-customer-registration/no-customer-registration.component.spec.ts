import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NoCustomerRegistrationComponent } from './no-customer-registration.component';

describe('NoCustomerRegistrationComponent', () => {
  let component: NoCustomerRegistrationComponent;
  let fixture: ComponentFixture<NoCustomerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:      [  FontAwesomeModule ],
      declarations: [ NoCustomerRegistrationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
