import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnersComponent } from './patners.component';

describe('PatnersComponent', () => {
  let component: PatnersComponent;
  let fixture: ComponentFixture<PatnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
