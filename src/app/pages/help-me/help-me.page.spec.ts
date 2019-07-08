import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpMePage } from './help-me.page';

describe('HelpMePage', () => {
  let component: HelpMePage;
  let fixture: ComponentFixture<HelpMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
