import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoffComponent } from './foff.component';

describe('FoffComponent', () => {
  let component: FoffComponent;
  let fixture: ComponentFixture<FoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
