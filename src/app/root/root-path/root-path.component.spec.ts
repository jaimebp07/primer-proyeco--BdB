import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlueButtonComponent } from 'src/app/general/blue-button/blue-button.component';
import { CaptionComponent } from 'src/app/general/caption/caption.component';
import { GeneralHeaderComponent } from 'src/app/general/general-header/general-header.component';
import { NoCustomerRegistrationComponent } from '../no-customer-registration/no-customer-registration.component';

import { RootPathComponent } from './root-path.component';

describe('RootPathComponent', () => {
  let component: RootPathComponent;
  let fixture: ComponentFixture<RootPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootPathComponent, 
        // 
        GeneralHeaderComponent,
        CaptionComponent,
        BlueButtonComponent,
        NoCustomerRegistrationComponent 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
