import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { AlbumListFilterComponent } from './album-list-filter.component';
import { By } from '@angular/platform-browser';
import { userSample1, userSample2 } from '../../../../../fixtures/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AlbumListFilter', () => {
  let component: AlbumListFilterComponent;
  let fixture: ComponentFixture<AlbumListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumListFilterComponent],
      imports: [FormsModule, ReactiveFormsModule],
    })
      .overrideComponent(AlbumListFilterComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain search input', () => {
    const input = fixture.debugElement.query(By.css('[placeholder="Search"]'));
    expect(input).toBeTruthy();
  });

  describe('users dropdown list', () => {
    let dropdownList: DebugElement;
    beforeEach(() => {
      dropdownList = fixture.debugElement.query(By.css('[aria-label="User filter"]'));
    });

    it('should exist', () => {
      expect(dropdownList).toBeTruthy();
    });

    it('should contain users dropdown list if no users', () => {
      const options = dropdownList.queryAll(By.css('option')).map((item) => ({
        value: item.nativeElement.value,
        text: item.nativeElement.innerText,
      }));

      expect(options).toEqual([
        {
          value: '0',
          text: 'Author',
        },
      ]);
    });

    it('should contain users dropdown list if has users', () => {
      component.users = [userSample1, userSample2];
      fixture.detectChanges();

      const options = dropdownList.queryAll(By.css('option')).map((item) => ({
        value: item.nativeElement.value,
        text: item.nativeElement.innerText,
      }));

      expect(options).toEqual([
        {
          value: '0',
          text: 'Author',
        },
        {
          value: '' + userSample1.id,
          text: userSample1.name,
        },
        {
          value: '' + userSample2.id,
          text: userSample2.name,
        },
      ]);
    });
  });

  describe('changeFilter event', () => {
    it('should emit if search input is changed', (done) => {
      component.changeFilter.subscribe((res) => {
        expect(res).toEqual([
          {
            field: 'q',
            value: 'some text',
          },
        ]);
        done();
      });

      const input = fixture.debugElement.query(By.css('[placeholder="Search"]'));

      input.triggerEventHandler('input', {
        target: { value: 'some text' },
      });
    });

    it('should emit if users dropdown is changed', (done) => {
      component.changeFilter.subscribe((res) => {
        expect(res).toEqual([
          {
            field: 'userId',
            value: 'some user',
          },
        ]);
        done();
      });

      const dropdownList = fixture.debugElement.query(By.css('[aria-label="User filter"]'));

      dropdownList.triggerEventHandler('change', {
        target: { value: 'some user' },
      });
    });
  });
});
