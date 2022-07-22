import { Component, OnInit } from '@angular/core';

import { Flight } from '../flight';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight.service';
import { AuthenticationService } from '../authentication.service';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

 // emailForm: FormGroup | any;
  email:string|any;
  bookingDetails:Booking[] | any;
  
  

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private bService: BookingService,
    private router:Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.email=sessionStorage.getItem('username');
    this.bookingDetails=this.bService.getBookingDetails(this.email);

  }
 
cancelBooking(passportNumber:string){
  this.bService.cancelBookingFlight(passportNumber)
      .subscribe(
        data => {
          console.log(data);
          window.location.reload();
          alert("Successfully Cancelled, Your amount will be refunded within 7 working days.");
        },
        error => console.log(error));
}
viewDetails(passportNumber:string){

  this.bService.passportNumber = this.bookingDetails.passportNumber;
  this.router.navigate(['viewDetail',passportNumber]);
}
viewDetailsById(bookingId:string){

  this.router.navigate(['viewDetail',bookingId]);
}
  
}
