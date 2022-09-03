import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormviewHomeComponent } from './formview-home.component';

describe('FormviewHomeComponent', () => {
  let component: FormviewHomeComponent;
  let fixture: ComponentFixture<FormviewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormviewHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
