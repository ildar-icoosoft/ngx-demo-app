import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailsTitleComponent } from './photo-details-title.component';

describe('PhotoDetailsTitleComponent', () => {
  let component: PhotoDetailsTitleComponent;
  let fixture: ComponentFixture<PhotoDetailsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoDetailsTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
