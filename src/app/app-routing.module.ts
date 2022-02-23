import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ReactiveformComponent } from './form/reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'another-page',
    component: HomeComponent
  },
  {
    path: 'home/:id',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveformComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'template-form',
    component: TemplateFormComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
   path: 'users/edit',
   component: EditComponent
  },
  {
    path: 'users/add',
    component: AddUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule, HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }