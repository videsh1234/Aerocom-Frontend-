import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string |any;
  loginSuccess = false;

  constructor(private router:Router,
    private loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLoginAdmin() {
    let admin={
      "email":this.username,
      "password":this.password
    }
    this.loginService.loginAdmin(admin).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['flightlist']);
        sessionStorage.setItem('admin', this.username)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
    });
 
    this.loginSuccess = false;
  }

}
