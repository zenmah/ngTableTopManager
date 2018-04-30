import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetMechanicsComponent } from './character-sheet-mechanics.component';

describe('CharacterSheetMechanicsComponent', () => {
  let component: CharacterSheetMechanicsComponent;
  let fixture: ComponentFixture<CharacterSheetMechanicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetMechanicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
