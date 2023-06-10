import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevofComponent } from './devof.component';

describe('DevofComponent', () => {
  let component: DevofComponent;
  let fixture: ComponentFixture<DevofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
