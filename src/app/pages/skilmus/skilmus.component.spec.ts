import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilmusComponent } from './skilmus.component';

describe('SkilmusComponent', () => {
  let component: SkilmusComponent;
  let fixture: ComponentFixture<SkilmusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilmusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilmusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
