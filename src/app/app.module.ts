import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ContentLayoutComponent, NavComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
