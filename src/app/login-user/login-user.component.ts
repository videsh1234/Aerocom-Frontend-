import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
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

  checkLoginUser() {
    let user={
      "email":this.username,
      "password":this.password
    }
    this.loginService.loginUser(user).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['home']);
        sessionStorage.setItem('username', this.username)
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
