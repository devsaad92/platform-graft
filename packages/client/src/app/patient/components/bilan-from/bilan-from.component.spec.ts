import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanFromComponent } from './bilan-from.component';

describe('BilanFromComponent', () => {
  let component: BilanFromComponent;
  let fixture: ComponentFixture<BilanFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
