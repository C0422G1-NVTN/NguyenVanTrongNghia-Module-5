import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDictionaryComponent } from './list-dictionary.component';

describe('ListDictionaryComponent', () => {
  let component: ListDictionaryComponent;
  let fixture: ComponentFixture<ListDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
