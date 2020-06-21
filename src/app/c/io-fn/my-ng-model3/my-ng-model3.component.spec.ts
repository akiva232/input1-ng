import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgModel3Component } from './my-ng-model3.component';

describe('MyNgModel3Component', () => {
  let component: MyNgModel3Component;
  let fixture: ComponentFixture<MyNgModel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgModel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgModel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
