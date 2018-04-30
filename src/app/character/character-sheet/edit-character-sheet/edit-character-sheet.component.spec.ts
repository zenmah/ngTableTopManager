import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharacterSheetComponent } from './edit-character-sheet.component';

describe('EditCharacterSheetComponent', () => {
  let component: EditCharacterSheetComponent;
  let fixture: ComponentFixture<EditCharacterSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCharacterSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCharacterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
