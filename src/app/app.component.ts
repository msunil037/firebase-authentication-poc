import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('signInForm') signInForm: NgForm;
  signInStatus = false;
  signInloaderStatus = false;
  signInWithGoogleloaderStatus = false;
  signInResponse: firebase.auth.UserCredential;
  loggedInUserName: string;
  username = "demo@email.com";
  password = "password";
  photoURL: string;
  constructor(
    private auth: AngularFireAuth
  ) {

  }

  ngOnInit(){

  }
  ngAfterViewInit(){

  }

  signInUser(form: NgForm){
    if(form.invalid){
      return;
    }
    this.signInloaderStatus = true;
    this.auth.signInWithEmailAndPassword(
      form.value.username,
      form.value.password
    ).then(signInResponse =>{
      this.signInloaderStatus = false;
      this.signInStatus = true;
      this.loggedInUserName = signInResponse.user.email;
      this.photoURL = signInResponse.user.photoURL;
    })
    .catch(error => {
      this.signInloaderStatus = false;
      this.signInStatus = false;
      console.error(error);
    })

  }
  signOut(){
    this.auth.signOut().then(signOutRes => {
      this.signInStatus = false;
    })
    .catch(error => {
      this.signInStatus = true;
      console.error(error);
    })
  }

  signinWithGoogle(){
    this.signInWithGoogleloaderStatus = true;
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(signInWithGoogleRes => {
      this.signInStatus = true;
      this.signInWithGoogleloaderStatus = false;
      this.loggedInUserName = signInWithGoogleRes.user.email;
      this.photoURL = signInWithGoogleRes.user.photoURL
    })
    .catch(error => {
      this.signInWithGoogleloaderStatus = false;
      this.signInStatus = false;
      console.error(error);
    })
  }


}
