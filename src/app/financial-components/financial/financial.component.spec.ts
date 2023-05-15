import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptionComponent } from 'src/app/general/caption/caption.component';
import { GeneralHeaderComponent } from 'src/app/general/general-header/general-header.component';
import { RecordFieldComponent } from 'src/app/general/record-field/record-field.component';
import { FormFinancialComponent } from '../form-financial/form-financial.component';
import { FinancialComponent } from './financial.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FinancialComponent', () => {
  let component: FinancialComponent;
  let fixture: ComponentFixture<FinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule,
        ReactiveFormsModule,],
      declarations: [ FinancialComponent,
      //
      RecordFieldComponent,
      GeneralHeaderComponent,
      CaptionComponent,
      FormFinancialComponent
      ]
    })
    .compileComponents();
  });

  it('Debe existir el AppComponent', () => {
    const fixture = TestBed.createComponent(FinancialComponent);
    const  component = fixture.componentInstance;
    expect(component).toBeTruthy();
    //fixture.detectChanges();
  })
  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
