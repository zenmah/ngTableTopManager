import { CharacterListComponent } from './components/character/list-character/list-character.component';
import { CharacterSheetComponent } from './components/character/character-sheet/character-sheet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CharacterComponent} from './components/character/character.component';
import {GamesComponent} from './components/games/games.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
    {
    path: 'character',
    component: CharacterListComponent
  },
  {
    path: 'character/:id' ,
    component: CharacterSheetComponent
  },
    {
    path: 'games',
    component: GamesComponent
  },
];
