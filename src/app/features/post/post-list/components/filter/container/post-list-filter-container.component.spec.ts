import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListFilterContainerComponent } from './post-list-filter-container.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('PostListFilterContainerComponent', () => {
  let component: PostListFilterContainerComponent;
  let fixture: ComponentFixture<PostListFilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListFilterContainerComponent],
      providers: [provideMockStore({})],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
