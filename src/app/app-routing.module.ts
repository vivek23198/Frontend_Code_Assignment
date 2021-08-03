import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [{
    path:'home',component:HomeComponent
  },
  {
    path:'add-employee', component:AddEmployeeComponent
  },
  {
    path:'list-employee', component:ListEmployeeComponent
},
{
  path:'**', component:HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
