import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceurComponent } from './freelanceur.component';

describe('FreelanceurComponent', () => {
  let component: FreelanceurComponent;
  let fixture: ComponentFixture<FreelanceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
