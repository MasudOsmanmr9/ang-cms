import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionListsComponent } from './collection-lists.component';

describe('CollectionListsComponent', () => {
  let component: CollectionListsComponent;
  let fixture: ComponentFixture<CollectionListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
