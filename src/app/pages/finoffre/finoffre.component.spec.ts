import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinoffreComponent } from './finoffre.component';

describe('FinoffreComponent', () => {
  let component: FinoffreComponent;
  let fixture: ComponentFixture<FinoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
