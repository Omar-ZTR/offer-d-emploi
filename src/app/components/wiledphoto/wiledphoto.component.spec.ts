import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiledphotoComponent } from './wiledphoto.component';

describe('WiledphotoComponent', () => {
  let component: WiledphotoComponent;
  let fixture: ComponentFixture<WiledphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiledphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiledphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
