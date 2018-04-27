import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule,MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  MatChipsModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import {routes} from './app.routes';
import * as environment from './config/firebase.config';

import { GamesComponent } from './components/games/games.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//import {CharacterService } from './firebase/character.service';
import { AuthService } from './firebase/auth.service';
import { CharacterListComponent } from './components/character/list-character/list-character.component';
import { CharacterSheetComponent } from './components/character/character-sheet/character-sheet.component';
import { EditCharacterSheetComponent } from './components/character/character-sheet/edit-character-sheet/edit-character-sheet.component';
import { CharacterSheetHeaderComponent } from './components/character/character-sheet/character-sheet-header/character-sheet-header.component';
import { CharacterSheetFictionComponent } from './components/character/character-sheet/character-sheet-fiction/character-sheet-fiction.component';
import { CharacterSheetMechanicsComponent } from './components/character/character-sheet/character-sheet-mechanics/character-sheet-mechanics.component';
import { MoveComponent } from './components/character/character-sheet/pbt-a/move/move.component';
import { IndividualStatComponent } from './components/character/character-sheet/pbta/individual-stat/individual-stat.component';
import { StatGridComponent } from './components/character/character-sheet/pbta/stat-grid/stat-grid.component';
import { CharacterService } from './components/character/shared/character.service';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  MatChipsModule,MatMenuModule, MatCheckboxModule
];



@NgModule({
  declarations: [
    AppComponent,
    
    GamesComponent,
    DashboardComponent,
    CharacterListComponent,
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
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'ngTableTopManager'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    
    ...MATERIAL_COMPONENTS,
    RouterModule.forRoot(routes)
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
