import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DepartmentComponent } from './components/department/department.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'department/:id', component:DepartmentComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
