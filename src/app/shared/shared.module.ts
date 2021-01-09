import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAuthFirebaseLoginRegisterComponent } from './ngx-auth-firebase-login-register/ngx-auth-firebase-login-register.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { NgxAuthFirebaseUserComponent } from './ngx-auth-firebase-user/ngx-auth-firebase-user.component';



@NgModule({
  declarations: [
    NgxAuthFirebaseLoginRegisterComponent,
    NgxAuthFirebaseUserComponent
  ],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule
  ],
  exports : [
    NgxAuthFirebaseLoginRegisterComponent,
    NgxAuthFirebaseUserComponent
  ]
})
export class SharedModule { }
