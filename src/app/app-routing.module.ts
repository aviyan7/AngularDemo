import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'another-page',
    component:HomeComponent,
  },
  {
    path:'home/:id',
    component:HomeComponent,
  },
  {
    path:'detail/:id/class/:classId',
    component:DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
