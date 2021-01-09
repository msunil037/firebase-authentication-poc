import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-auth-firebase-login-register',
  templateUrl: './ngx-auth-firebase-login-register.component.html',
  styleUrls: ['./ngx-auth-firebase-login-register.component.scss']
})
export class NgxAuthFirebaseLoginRegisterComponent implements OnInit {

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
