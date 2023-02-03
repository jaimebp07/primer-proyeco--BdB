import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPathComponent } from './root-path.component';

describe('RootPathComponent', () => {
  let component: RootPathComponent;
  let fixture: ComponentFixture<RootPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootPathComponent ]
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
