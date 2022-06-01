import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPhotosFilterComponent } from './all-photos-filter.component';

describe('PhotoListFilterComponent', () => {
  let component: AllPhotosFilterComponent;
  let fixture: ComponentFixture<AllPhotosFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPhotosFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPhotosFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
