import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseAuthComponent } from './firebase-auth/firebase-auth.component';
import { NgxAuthFirebaseUIComponent } from './ngx-auth-firebase-ui/ngx-auth-firebase-ui.component';

const routes: Routes = [
  {
    path : '',
    component : FirebaseAuthComponent
  },
  {
    path : 'ngx-auth-firebaseui',
    component : NgxAuthFirebaseUIComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
