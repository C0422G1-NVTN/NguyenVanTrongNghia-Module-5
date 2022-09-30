import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinesAppComponent } from './timelines-app.component';

describe('TimelinesAppComponent', () => {
  let component: TimelinesAppComponent;
  let fixture: ComponentFixture<TimelinesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
