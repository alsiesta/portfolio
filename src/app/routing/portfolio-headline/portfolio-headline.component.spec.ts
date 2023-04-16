import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeadlineComponent } from './portfolio-headline.component';

describe('PortfolioHeadlineComponent', () => {
  let component: PortfolioHeadlineComponent;
  let fixture: ComponentFixture<PortfolioHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHeadlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
