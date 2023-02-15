import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptionComponent } from 'src/app/general/caption/caption.component';
import { GeneralHeaderComponent } from 'src/app/general/general-header/general-header.component';
import { RecordFieldComponent } from 'src/app/general/record-field/record-field.component';
import { FormFinancialComponent } from '../form-financial/form-financial.component';

import { FinancialComponent } from './financial.component';

describe('FinancialComponent', () => {
  let component: FinancialComponent;
  let fixture: ComponentFixture<FinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialComponent,
      // 
      RecordFieldComponent,
      GeneralHeaderComponent,
      CaptionComponent,
      FormFinancialComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
