import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelPerentComponent } from './ng-model-perent.component';

describe('NgModelPerentComponent', () => {
  let component: NgModelPerentComponent;
  let fixture: ComponentFixture<NgModelPerentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelPerentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelPerentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
