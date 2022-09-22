import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFontSizeComponent } from './angular-font-size.component';

describe('AngularFontSizeComponent', () => {
  let component: AngularFontSizeComponent;
  let fixture: ComponentFixture<AngularFontSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFontSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
