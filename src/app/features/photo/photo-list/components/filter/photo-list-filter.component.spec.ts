import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListFilterComponent } from './photo-list-filter.component';

describe('PhotoListFilterComponent', () => {
  let component: PhotoListFilterComponent;
  let fixture: ComponentFixture<PhotoListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoListFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
