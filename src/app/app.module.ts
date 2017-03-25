import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';

import {AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import {routes} from './app.routes';
import fireconfig from './config/firebase.config';

import { CharacterComponent } from './components/character/character.component';
import { GamesComponent } from './components/games/games.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {CharacterService } from './firebase/character.service';
import { AuthService } from './firebase/auth.service';
import { CharacterListComponent } from './components/character/list-character/list-character.component';
import { CharacterSheetComponent } from './components/character/character-sheet/character-sheet.component';





@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    GamesComponent,
    DashboardComponent,
    CharacterListComponent,
    CharacterSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(fireconfig),
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
