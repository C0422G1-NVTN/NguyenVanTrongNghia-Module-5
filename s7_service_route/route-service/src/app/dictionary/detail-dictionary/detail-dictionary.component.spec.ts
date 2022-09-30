import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDictionaryComponent } from './detail-dictionary.component';

describe('DetailDictionaryComponent', () => {
  let component: DetailDictionaryComponent;
  let fixture: ComponentFixture<DetailDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
