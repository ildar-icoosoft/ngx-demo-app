import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListFilterContainerComponent } from './photo-list-filter-container.component';

describe('PhotoListFilterContainerComponent', () => {
  let component: PhotoListFilterContainerComponent;
  let fixture: ComponentFixture<PhotoListFilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoListFilterContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
