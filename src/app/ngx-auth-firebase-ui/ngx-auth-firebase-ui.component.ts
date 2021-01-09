import { Component, OnInit } from '@angular/core';
import {AuthProvider, Theme} from 'ngx-auth-firebaseui';
@Component({
  selector: 'app-ngx-auth-firebase-ui',
  templateUrl: './ngx-auth-firebase-ui.component.html',
  styleUrls: ['./ngx-auth-firebase-ui.component.scss']
})
export class NgxAuthFirebaseUIComponent implements OnInit {
  themes = Theme;
  constructor() { }

  ngOnInit(): void {
  }

  printUser(event) {
    console.log(event);
  }

  printError(event) {
   console.error(event);
  }

}
