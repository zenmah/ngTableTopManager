import { CharacterListComponent } from './character/list-character/list-character.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'characters',
    component: CharacterListComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
];
