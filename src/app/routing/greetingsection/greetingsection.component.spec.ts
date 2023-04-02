import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsectionComponent } from './greetingsection.component';

describe('GreetingsectionComponent', () => {
  let component: GreetingsectionComponent;
  let fixture: ComponentFixture<GreetingsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
