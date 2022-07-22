import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  flights:Flight[] | any;
  flight : Flight = new Flight();
  email:string|any;
  flightNumber:string|any;
  constructor( private flightService: FlightService, 
    private authenticationService: AuthenticationService,
    private router:Router,
    private route : ActivatedRoute) {

     }

  ngOnInit(): void {
    this.flight = this.route.snapshot.params['flight'];

    this.reloadData();
  }
  reloadData() {
  this.flights = this.flightService.getFlight
  (this.flightService.fromLocation,this.flightService.toLocation,this.flightService.date); 
  
}
flightDetails(flightNumber:string)
  {
    if(this.authenticationService.isUserLoggedIn())
    {
      this.email = sessionStorage.getItem('username')
    
    console.log(this.email);
    }
    else{
      alert("You are not Logged in please Login");
      window.location.href='/loginuser';
      this.router.navigate(['/loginuser']);
    }
    this.router.navigate(['booking',flightNumber]);
    console.log(this.flight.flightNumber);
  }
}
