import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPhotosItemComponent } from './dashboard-photos-item.component';

describe('DashboardPhotosItemComponent', () => {
  let component: DashboardPhotosItemComponent;
  let fixture: ComponentFixture<DashboardPhotosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPhotosItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPhotosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
