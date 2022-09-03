import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColectionComponent } from './create-colection.component';

describe('CreateColectionComponent', () => {
  let component: CreateColectionComponent;
  let fixture: ComponentFixture<CreateColectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateColectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
