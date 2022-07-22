import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  
  registerForm: FormGroup | any;

    submitted = false;
    user:User=new User();


  constructor(private formBuilder: FormBuilder,private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
      dob: ['', [Validators.required]],
      phoneNo:  ['', [Validators.required]],
     
  
    }); 
  }

  get f() { return this.registerForm.controls; }

  User(): void {
    this.submitted=false;
    this.user=new User();
  }

  onSubmit() {
    this.submitted = true;
    this.user=this.registerForm.value;
       // stop the process here if form is invalid
       if (this.registerForm.invalid) {
           return;
       }
       
       this.save();

  }

  save() {
 
    this.authenticationService.saveUser(this.user)
      .subscribe(data => console.log(data), error =>this.gotoList2());
    this.user= new User();
   // this.address=new Address();
   this.gotoList();
   
   }
   gotoList() {
    this.router.navigate(['home']);
   }
   gotoList2() {
    alert("User Already exist")
    window.location.href='/registeruser';
   
   }
  

 



}


  

  
 
 


