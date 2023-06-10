import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadfComponent } from './sadf.component';

describe('SadfComponent', () => {
  let component: SadfComponent;
  let fixture: ComponentFixture<SadfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SadfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
