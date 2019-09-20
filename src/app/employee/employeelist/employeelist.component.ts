import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(
      (data) => this.employees = data,
      (error) => this.errorMsg = error
    );
  }

  onSelect(employee) {
    console.log(employee);
    this.router.navigate(['/employees', employee.id]);
  }

  detail(employee) {
    this.router.navigate([employee.id], { relativeTo: this.route });
  }
}
