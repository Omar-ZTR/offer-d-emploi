import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcComponent } from './aboutc.component';

describe('AboutcComponent', () => {
  let component: AboutcComponent;
  let fixture: ComponentFixture<AboutcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
