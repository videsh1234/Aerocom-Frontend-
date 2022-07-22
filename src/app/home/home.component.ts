import { Component, OnInit } from '@angular/core';

import { Flight } from '../flight';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flightForm: FormGroup | any;
  submitted = false;
  email:string|any;
  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkata','Mumbai','Bhopal','Goa','Amritsar','Pune',
  'Lucknow','Hyderabad','Jaipur','Patna' ]
 
  flight: Flight = new Flight();

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private fService: FlightService,
    private router: Router) { }

  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      fromLocation: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      toLocation: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      date: ['', [Validators.required]],
      numberOfSeats: ['', [Validators.required]]
      })
  }
   // convenience getter for easy access to form fields
   get f() { return this.flightForm.controls; }

   changeCity(e: | any) {
    this.flightForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }

  onSubmit() {

    this.submitted = true;
    this.flight=this.flightForm.value;
    this.search();
    // stop the process here if form is invalid
    //if (this.registerForm.invalid) {
      //  return;
    //}
    

  }
  search() {
   // alert(this.flight.fromLocation+" "+this.flight.toLocation);
    /*this.authenticationService.saveDealer(this.flight)
    .subscribe(data => console.log(data), error => console.log(error));
    this.flight= new FlightDetails();*/

    this.fService.fromLocation = this.flight.fromLocation;
    this.fService.toLocation = this.flight.toLocation;
    this.authenticationService.fromLocation1 = this.flight.fromLocation;
    this.authenticationService.toLocation1 = this.flight.toLocation;
    this.fService.date = this.flight.date;
    this.authenticationService.date = this.flight.date;
    //this.fService.passengers = this.flight.passengers;

    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/searchFlight']);
  }


}

