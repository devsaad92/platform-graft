import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologieFormComponent } from './hematologie-form.component';

describe('HematologieFormComponent', () => {
  let component: HematologieFormComponent;
  let fixture: ComponentFixture<HematologieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HematologieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HematologieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
