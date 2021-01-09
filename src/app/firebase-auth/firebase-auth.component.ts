import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase-auth',
  templateUrl: './firebase-auth.component.html',
  styleUrls: ['./firebase-auth.component.scss']
})
export class FirebaseAuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickFirebaseAuthenticationNGXAuthFirebaseUI() {
    this.router.navigateByUrl('/ngx-auth-firebaseui')
  }

}
