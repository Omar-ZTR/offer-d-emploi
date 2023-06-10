import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfidxComponent } from './ofidx.component';

describe('OfidxComponent', () => {
  let component: OfidxComponent;
  let fixture: ComponentFixture<OfidxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfidxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfidxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
