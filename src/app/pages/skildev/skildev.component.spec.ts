import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkildevComponent } from './skildev.component';

describe('SkildevComponent', () => {
  let component: SkildevComponent;
  let fixture: ComponentFixture<SkildevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkildevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkildevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
