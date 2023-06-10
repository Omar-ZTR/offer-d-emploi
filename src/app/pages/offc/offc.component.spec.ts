import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcComponent } from './offc.component';

describe('OffcComponent', () => {
  let component: OffcComponent;
  let fixture: ComponentFixture<OffcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
