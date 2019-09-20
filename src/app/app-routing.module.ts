import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeedetailComponent} from './employee/employeedetail/employeedetail.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employees/:id', component: EmployeedetailComponent},
  { path: 'employees',   component: EmployeelistComponent,
    children: [
      { path: ':id', component: EmployeedetailComponent}
    ]},
  { path: '**',   component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeelistComponent,
                                  EmployeedetailComponent,
                                  HomeComponent,
                                  PagenotfoundComponent];
