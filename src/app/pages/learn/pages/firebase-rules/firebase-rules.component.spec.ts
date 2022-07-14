import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseRulesComponent } from './firebase-rules.component';

describe('FirebaseRulesComponent', () => {
  let component: FirebaseRulesComponent;
  let fixture: ComponentFixture<FirebaseRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
