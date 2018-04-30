import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './ui/user-login/user-login.component';
import { CharacterListComponent } from './character/list-character/list-character.component';
import { CharacterSheetComponent } from './character/character-sheet/character-sheet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';

import { AuthGuard } from './core/auth.guard';
import { CoreModule } from './core/core.module';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'games', component: GamesComponent },
  { path: 'characters', component: CharacterListComponent, canActivate: [AuthGuard] },
  { path: 'characters/:id', component: CharacterSheetComponent,  canActivate: [AuthGuard] },
  // uploads are lazy loaded
  //{ path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
