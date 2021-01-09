import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthFirebaseLoginRegisterComponent } from './ngx-auth-firebase-login-register.component';

describe('NgxAuthFirebaseLoginRegisterComponent', () => {
  let component: NgxAuthFirebaseLoginRegisterComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAuthFirebaseLoginRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthFirebaseLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
