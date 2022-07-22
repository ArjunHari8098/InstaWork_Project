//HTTP service class
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employees } from "./employees";
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl = ' http://127.0.0.1:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {
  }
  InsertTeamMemeber(employee:Employees): Observable<Employees> {
    return this.http
    .post<Employees>(this.baseUrl+'/getTeam/', employee, this.httpOptions)
    .pipe(retry(1),catchError(this.errorHandel));
  }
  GetTeams(): Observable<Employees> {
    return this.http
      .get<Employees>(this.baseUrl + '/getTeam', this.httpOptions)
      .pipe(retry(1),catchError(this.errorHandel));
  }
  UpdateTeamMemeber(employee:Employees): Observable<Employees> {
    return this.http
    .put<Employees>(this.baseUrl+'/delOrUpdate/'+employee.id, employee, this.httpOptions)
    .pipe(retry(1),catchError(this.errorHandel));
  }
  DeleteTeamMemeber(employee:Employees): Observable<Employees> {
    return this.http
    .delete<Employees>(this.baseUrl+'/delOrUpdate/'+employee.id, this.httpOptions)
    .pipe(retry(1),catchError(this.errorHandel));
  }
  errorHandel(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
