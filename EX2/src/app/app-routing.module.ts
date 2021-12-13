import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { DepAddEditComponent } from './dep-add-edit/dep-add-edit.component';
import { HomeComponent } from './home/home.component';
import { DepListingComponent } from './dep-listing/dep-listing.component';
import { EmpListingComponent } from './emp-listing/emp-listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    component: EmpListingComponent,
    path: 'emp-listing'
  },
  {
    component: DepListingComponent,
    path: 'dep-listing'
  },
  {
    component: EmpAddEditComponent,
    path: 'emp-add-edit/:id'
  },
  {
    component: DepAddEditComponent,
    path: 'dep-add-edit/:id'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
