import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilansComponent } from './bilans.component';

describe('BilansComponent', () => {
  let component: BilansComponent;
  let fixture: ComponentFixture<BilansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
