import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilmsComponent } from './skilms.component';

describe('SkilmsComponent', () => {
  let component: SkilmsComponent;
  let fixture: ComponentFixture<SkilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
