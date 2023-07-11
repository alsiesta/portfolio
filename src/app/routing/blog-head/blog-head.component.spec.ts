import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeadComponent } from './blog-head.component';

describe('BlogHeadComponent', () => {
  let component: BlogHeadComponent;
  let fixture: ComponentFixture<BlogHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
