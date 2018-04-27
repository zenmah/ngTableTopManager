import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStatComponent } from './individual-stat.component';

describe('IndividualStatComponent', () => {
  let component: IndividualStatComponent;
  let fixture: ComponentFixture<IndividualStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
