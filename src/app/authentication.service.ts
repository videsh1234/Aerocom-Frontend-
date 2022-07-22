import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  fromLocation1 = '';
  toLocation1 = '';
  date='';
  flightNumber='';
  price='';
  

  private baseUrl = 'http://localhost:9090/aerocom/api/user';

  constructor(private http:HttpClient) { }

  getDealersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  loginUser(user:any):Observable<any>
  {
    return this.http.post(`http://localhost:9090/aerocom/api/loginUser`,user)
  }

  loginAdmin(admin:any):Observable<any>
  {
    return this.http.post(`http://localhost:9090/aerocom/api/loginAdmin`,admin)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('admin')
   
        console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    if(this.isAdminLoggedIn())
    sessionStorage.removeItem('admin')
    else
    sessionStorage.removeItem('username')
  }

  saveUser(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:9090/aerocom/api/registerUser`, user);
  }
}