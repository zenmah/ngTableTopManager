import { Component, OnInit } from '@angular/core';

import { AuthService } from './core/auth.service';

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

  constructor(public auth: AuthService) {
  }
  user: any = {};

  login() {
    this.auth.googleLogin();
  }
  logout() {
    this.auth.signOut();
  }
}
