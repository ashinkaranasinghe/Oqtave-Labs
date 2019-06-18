import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangehrmComponent } from './orangehrm.component';

describe('OrangehrmComponent', () => {
  let component: OrangehrmComponent;
  let fixture: ComponentFixture<OrangehrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangehrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangehrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
