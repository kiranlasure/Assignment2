import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { IEmployee } from './employee';
import { Observable } from 'rxjs';  

@Injectable()
export class EmployeeService {
  private url : string= 'https://api.myjson.com/bins/pagqc';
  constructor(private http: HttpClient) { }

  getemployee():Observable<IEmployee[]>
  {
        return this.http.get<IEmployee[]>(this.url);
  }
  

}