import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrfComponent } from './offrf.component';

describe('OffrfComponent', () => {
  let component: OffrfComponent;
  let fixture: ComponentFixture<OffrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
