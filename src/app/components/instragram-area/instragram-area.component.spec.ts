import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstragramAreaComponent } from './instragram-area.component';

describe('InstragramAreaComponent', () => {
  let component: InstragramAreaComponent;
  let fixture: ComponentFixture<InstragramAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstragramAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstragramAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
