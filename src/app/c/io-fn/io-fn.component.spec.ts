import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOFNComponent } from './io-fn.component';

describe('IOFNComponent', () => {
  let component: IOFNComponent;
  let fixture: ComponentFixture<IOFNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOFNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOFNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
