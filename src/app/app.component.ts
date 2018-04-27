import { AuthService } from './firebase/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationName = 'Table Top Manager';
  links: string[] = ['Link1', 'Link2'];
  folders: any = [{
    name: 'Folder1',
    updated: 'now'
  }
  , {
    name: 'Folder2',
    updated: '3 hours ago'
  }];
  notes: any = [{
    name: 'Note1',
    updated: 'now'
  }
  , {
    name: 'Note2',
    updated: '3 hours ago'
  }];

  constructor(public afAuth: AngularFireAuth) {
  }
  user: any = {};

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
