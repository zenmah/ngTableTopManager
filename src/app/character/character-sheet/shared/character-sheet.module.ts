import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { routes } from './character-sheet.routes';

import { MaterialModule } from '../../../shared/material.module';

import { CharacterService } from '../../shared/character.service';

import { CharacterSheetComponent } from '../character-sheet.component';
import { EditCharacterSheetComponent } from '../edit-character-sheet/edit-character-sheet.component';
import { CharacterSheetHeaderComponent } from '../character-sheet-header/character-sheet-header.component';
import { CharacterSheetFictionComponent } from '../character-sheet-fiction/character-sheet-fiction.component';
import { CharacterSheetMechanicsComponent } from '../character-sheet-mechanics/character-sheet-mechanics.component';
import { MoveComponent } from '../character-sheet-mechanics/move/move.component';
import { IndividualStatComponent } from '../character-sheet-mechanics/individual-stat/individual-stat.component';
import { StatGridComponent } from '../character-sheet-mechanics/stat-grid/stat-grid.component';


@NgModule({
  declarations: [
    CharacterSheetComponent,
    EditCharacterSheetComponent,
    CharacterSheetHeaderComponent,
    CharacterSheetFictionComponent,
    CharacterSheetMechanicsComponent,
    MoveComponent,
    IndividualStatComponent,
    StatGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFirestoreModule, // imports firebase/storage only needed for storage features
    MaterialModule
  ],
  providers: [CharacterService]
})
export class CharacterSheetModule { }
