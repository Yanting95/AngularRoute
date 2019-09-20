import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MyEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://127.0.0.1:8000/api/employee/'
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<MyEmployee[]> {
    return this.http.get<MyEmployee[]>(this.url)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'No data found');
  }
  getEmployeeDetail(id: number): Observable<MyEmployee[]> {
    return this.http.get<MyEmployee[]>(this.url + id)
      .pipe(catchError(this.errorHandler));
  }
}
