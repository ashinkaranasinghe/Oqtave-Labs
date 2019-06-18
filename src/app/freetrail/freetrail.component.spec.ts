import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetrailComponent } from './freetrail.component';

describe('FreetrailComponent', () => {
  let component: FreetrailComponent;
  let fixture: ComponentFixture<FreetrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreetrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
