import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddMenteesComponent} from './add-mentees.component';

describe('AddMenteesComponent', () => {
  let component: AddMenteesComponent;
  let fixture: ComponentFixture<AddMenteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
