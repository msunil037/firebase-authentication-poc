import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthFirebaseUIComponent } from './ngx-auth-firebase-ui.component';

describe('NgxAuthFirebaseUIComponent', () => {
  let component: NgxAuthFirebaseUIComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAuthFirebaseUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthFirebaseUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
