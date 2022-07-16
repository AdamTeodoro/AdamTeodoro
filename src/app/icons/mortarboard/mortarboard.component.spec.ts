import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortarboardComponent } from './mortarboard.component';

describe('MortarboardComponent', () => {
  let component: MortarboardComponent;
  let fixture: ComponentFixture<MortarboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortarboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortarboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
