import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSheetComponent } from '../character-sheet.component';

export const routes: Routes = [
  {
    path: 'characters/:id' ,
    component: CharacterSheetComponent
  }
];
