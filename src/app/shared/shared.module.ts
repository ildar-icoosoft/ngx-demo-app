import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, RouterModule, NgbPaginationModule, FontAwesomeModule],
  exports: [BreadcrumbsComponent, RouterModule, NgbPaginationModule, FontAwesomeModule],
})
export class SharedModule {}
