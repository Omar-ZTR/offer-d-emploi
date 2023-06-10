import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetrComponent } from './letr.component';

describe('LetrComponent', () => {
  let component: LetrComponent;
  let fixture: ComponentFixture<LetrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
