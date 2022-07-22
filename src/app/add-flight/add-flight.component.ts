import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flight } from '../flight';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight:Flight = new Flight();
  submitted=false;

  constructor(private flightService:FlightService, private router:Router) { }

  ngOnInit(): void {
  }

  newFlight(): void {
    this.submitted = false;
    this.flight= new Flight();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  save() {
    this.flightService.newFlight(this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight= new Flight();
    this.gotoList();
  }
 
  gotoList() {
    this.router.navigate(['/flightlist']).then(() => {
      window.location.reload();
    });

  }

}
