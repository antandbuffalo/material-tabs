import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1homeComponent } from './tab1home.component';

describe('Tab1homeComponent', () => {
  let component: Tab1homeComponent;
  let fixture: ComponentFixture<Tab1homeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1homeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
