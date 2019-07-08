import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelpPage } from './my-help.page';

describe('MyHelpPage', () => {
  let component: MyHelpPage;
  let fixture: ComponentFixture<MyHelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
