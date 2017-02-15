import { Injectable } from '@angular/core';
import {AngularFire, AngularFireAuth, AuthProviders, AuthMethods} from 'angularfire2';


@Injectable()
export class AuthService {
  // this.use

  user: any;

  constructor( private af: AngularFire) {
    this.user = this.af.auth;
  }


  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(authState => {
      console.log(authState);
      return authState;
    });

  }

  logout(){
    this.af.auth.logout();
  }

}
