import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';

@NgModule({
  declarations: [
  ],
  imports: [
    
  ],
  providers: [AuthGuard, AuthService, NotifyService],
  exports: [
    
  ]
})
export class CoreModule { }
