import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologiesComponent } from './hematologies.component';

describe('HematologiesComponent', () => {
  let component: HematologiesComponent;
  let fixture: ComponentFixture<HematologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HematologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HematologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
