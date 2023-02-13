import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFinancialComponent } from './form-financial.component';

describe('FormFinancialComponent', () => {
  let component: FormFinancialComponent;
  let fixture: ComponentFixture<FormFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFinancialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
