import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcinProfileComponent } from './medcin-profile.component';

describe('MedcinProfileComponent', () => {
  let component: MedcinProfileComponent;
  let fixture: ComponentFixture<MedcinProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcinProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcinProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
