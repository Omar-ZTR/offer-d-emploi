import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentcComponent } from './talentc.component';

describe('TalentcComponent', () => {
  let component: TalentcComponent;
  let fixture: ComponentFixture<TalentcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
