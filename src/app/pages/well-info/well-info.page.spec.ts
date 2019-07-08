import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellInfoPage } from './well-info.page';

describe('WellInfoPage', () => {
  let component: WellInfoPage;
  let fixture: ComponentFixture<WellInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
