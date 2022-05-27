import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListFilterContainerComponent } from './album-list-filter-container.component';

describe('AlbumListFilterContainerComponent', () => {
  let component: AlbumListFilterContainerComponent;
  let fixture: ComponentFixture<AlbumListFilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumListFilterContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
