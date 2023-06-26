import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AipaneComponent } from './aipane.component';

describe('AiComponent', () => {
  let component: AipaneComponent;
  let fixture: ComponentFixture<AipaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AipaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AipaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
