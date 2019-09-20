import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeedetailComponent } from './employee/employeedetail/employeedetail.component';
import {AppRoutingModule} from './app-routing.module';
import { NamecapitalPipe } from './namecapital.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeedetailComponent,
    NamecapitalPipe,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
