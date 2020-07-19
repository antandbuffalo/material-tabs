import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2homeComponent } from './tab2home.component';

describe('Tab2homeComponent', () => {
  let component: Tab2homeComponent;
  let fixture: ComponentFixture<Tab2homeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2homeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
