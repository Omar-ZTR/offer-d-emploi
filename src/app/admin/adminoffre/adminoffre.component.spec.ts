import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoffreComponent } from './adminoffre.component';

describe('AdminoffreComponent', () => {
  let component: AdminoffreComponent;
  let fixture: ComponentFixture<AdminoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
