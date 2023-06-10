import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilwtComponent } from './skilwt.component';

describe('SkilwtComponent', () => {
  let component: SkilwtComponent;
  let fixture: ComponentFixture<SkilwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilwtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
