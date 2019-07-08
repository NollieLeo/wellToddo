import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellZoomPage } from './well-zoom.page';

describe('WellZoomPage', () => {
  let component: WellZoomPage;
  let fixture: ComponentFixture<WellZoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellZoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellZoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
