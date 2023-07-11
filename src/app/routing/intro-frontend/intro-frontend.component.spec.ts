import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroFrontendComponent } from './intro-frontend.component';

describe('IntroFrontendComponent', () => {
  let component: IntroFrontendComponent;
  let fixture: ComponentFixture<IntroFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroFrontendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
