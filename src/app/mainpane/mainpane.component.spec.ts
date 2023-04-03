import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpaneComponent } from './mainpane.component';

describe('MainpaneComponent', () => {
  let component: MainpaneComponent;
  let fixture: ComponentFixture<MainpaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
