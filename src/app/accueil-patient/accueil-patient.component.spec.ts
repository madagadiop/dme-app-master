import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPatientComponent } from './accueil-patient.component';

describe('AccueilPatientComponent', () => {
  let component: AccueilPatientComponent;
  let fixture: ComponentFixture<AccueilPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilPatientComponent]
    });
    fixture = TestBed.createComponent(AccueilPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
