import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpListingComponent } from './emp-listing/emp-listing.component';
import { DepListingComponent } from './dep-listing/dep-listing.component';
import { DepAddEditComponent } from './dep-add-edit/dep-add-edit.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    EmpListingComponent,
    DepListingComponent,
    DepAddEditComponent,
    EmpAddEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
