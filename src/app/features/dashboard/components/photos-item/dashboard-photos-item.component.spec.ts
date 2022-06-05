import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPhotosItemComponent } from './dashboard-photos-item.component';
import { photoSample } from '../../../../fixtures/photo';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';

describe('DashboardPhotosItemComponent', () => {
  let component: DashboardPhotosItemComponent;
  let fixture: ComponentFixture<DashboardPhotosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPhotosItemComponent],
      imports: [RouterTestingModule],
    })
      .overrideComponent(DashboardPhotosItemComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPhotosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be empty if no photo', () => {
    expect(fixture.debugElement.nativeElement.innerText).toBe('');
  });

  it('should contain thumbnail photo', () => {
    component.photo = photoSample;
    fixture.detectChanges();

    let debugEl = fixture.debugElement.query(By.css(`img[src="${photoSample.thumbnailUrl}"]`));
    expect(debugEl).toBeTruthy();

    expect(debugEl.nativeElement.title).toBe(photoSample.title);
    const parent = debugEl.parent;
    const routerLink = parent!.injector.get(RouterLinkWithHref);
    expect(routerLink.href).toBe(`/photo/${photoSample.id}`);
  });

  it('should contain text lint to photo page', () => {
    component.photo = photoSample;
    fixture.detectChanges();

    const linkDebugEl = fixture.debugElement.query(
      (debugEl) => debugEl.name === 'a' && debugEl.nativeElement.textContent === photoSample.title,
    );
    expect(linkDebugEl).toBeTruthy();

    const routerLink = linkDebugEl!.injector.get(RouterLinkWithHref);
    expect(routerLink.href).toBe(`/photo/${photoSample.id}`);
  });
});
