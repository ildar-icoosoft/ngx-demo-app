import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosTitleComponent } from './album-photos-title.component';

describe('AlbumPhotosTitleComponent', () => {
  let component: AlbumPhotosTitleComponent;
  let fixture: ComponentFixture<AlbumPhotosTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumPhotosTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPhotosTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
