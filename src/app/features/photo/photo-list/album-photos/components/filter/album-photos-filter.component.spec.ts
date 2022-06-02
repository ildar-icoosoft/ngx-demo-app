import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosFilterComponent } from './album-photos-filter.component';

describe('AlbumPhotosFilterComponent', () => {
  let component: AlbumPhotosFilterComponent;
  let fixture: ComponentFixture<AlbumPhotosFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumPhotosFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPhotosFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
