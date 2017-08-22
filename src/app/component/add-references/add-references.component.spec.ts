import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddReferencesComponent} from './add-references.component';

describe('AddReferencesComponent', () => {
  let component: AddReferencesComponent;
  let fixture: ComponentFixture<AddReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
