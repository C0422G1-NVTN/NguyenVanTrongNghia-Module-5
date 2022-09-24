import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuramaHomeComponent } from './furama-home.component';

describe('FuramaHomeComponent', () => {
  let component: FuramaHomeComponent;
  let fixture: ComponentFixture<FuramaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuramaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuramaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
