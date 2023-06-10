import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadbarComponent } from './sadbar.component';

describe('SadbarComponent', () => {
  let component: SadbarComponent;
  let fixture: ComponentFixture<SadbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SadbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
