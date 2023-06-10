import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfComponent } from './aboutf.component';

describe('AboutfComponent', () => {
  let component: AboutfComponent;
  let fixture: ComponentFixture<AboutfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
