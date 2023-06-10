import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfComponent } from './navf.component';

describe('NavfComponent', () => {
  let component: NavfComponent;
  let fixture: ComponentFixture<NavfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
