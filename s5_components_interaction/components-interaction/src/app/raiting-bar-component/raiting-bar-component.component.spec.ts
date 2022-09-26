import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaitingBarComponentComponent } from './raiting-bar-component.component';

describe('RaitingBarComponentComponent', () => {
  let component: RaitingBarComponentComponent;
  let fixture: ComponentFixture<RaitingBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaitingBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaitingBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
