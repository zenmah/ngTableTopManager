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
  MatChipsModule, MatMenuModule, MatCheckboxModule, MatSlider, MatSliderModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import {routes} from './app.routes';
import * as environment from './config/firebase.config';

import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CharacterListComponent } from './character/list-character/list-character.component';
import { CharacterService } from './character/shared/character.service'
import { MaterialModule } from './shared/material.module';
import { CharacterSheetModule } from './character/character-sheet/shared/character-sheet.module';
import { CoreModule } from './core/core.module';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DashboardComponent,
    CharacterListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    MaterialModule,
    AppRoutingModule,
    CoreModule,
    UiModule,
    CharacterSheetModule,
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
