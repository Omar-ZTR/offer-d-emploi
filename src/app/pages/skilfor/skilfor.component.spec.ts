import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilforComponent } from './skilfor.component';

describe('SkilforComponent', () => {
  let component: SkilforComponent;
  let fixture: ComponentFixture<SkilforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
