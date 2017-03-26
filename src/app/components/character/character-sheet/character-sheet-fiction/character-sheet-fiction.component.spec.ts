import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetFictionComponent } from './character-sheet-fiction.component';

describe('CharacterSheetFictionComponent', () => {
  let component: CharacterSheetFictionComponent;
  let fixture: ComponentFixture<CharacterSheetFictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetFictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
