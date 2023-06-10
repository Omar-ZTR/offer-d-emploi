import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfreeComponent } from './adminfree.component';

describe('AdminfreeComponent', () => {
  let component: AdminfreeComponent;
  let fixture: ComponentFixture<AdminfreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
