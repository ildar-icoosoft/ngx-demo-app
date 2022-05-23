import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListFilterComponent } from './post-list-filter.component';

describe('PostListFilterComponent', () => {
  let component: PostListFilterComponent;
  let fixture: ComponentFixture<PostListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
