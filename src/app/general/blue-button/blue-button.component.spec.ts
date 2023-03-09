import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { BlueButtonComponent } from './blue-button.component';

describe('BlueButtonComponent', () => {
  let component: BlueButtonComponent;
  let fixture: ComponentFixture<BlueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueButtonComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule
        // ... whatever other module you have
      ],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: {
          
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
