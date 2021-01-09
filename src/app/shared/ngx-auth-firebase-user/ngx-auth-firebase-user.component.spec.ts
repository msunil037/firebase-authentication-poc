import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthFirebaseUserComponent } from './ngx-auth-firebase-user.component';

describe('NgxAuthFirebaseUserComponent', () => {
  let component: NgxAuthFirebaseUserComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAuthFirebaseUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthFirebaseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
