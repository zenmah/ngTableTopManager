import { AuthService } from './firebase/auth.service';
import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
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

  user: any = {};

  constructor(private authService: AuthService){

  }

  ngOnInit()  {
    this.authService.user.subscribe(authState => {
      if (authState) {
        console.log('Logged In!');
        this.user = authState;
      }
    });
  }


  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}
