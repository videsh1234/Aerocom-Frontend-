import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  id: string |any;
  flightNumber:string|any;
  flight: Flight |any;
  submitted = false;
  flights: Observable<Flight[]> | any;
  constructor(private route: ActivatedRoute,private router: Router,
    private flightService: FlightService) { }

  ngOnInit(): void {
    this.flight = new Flight();
   
    this.flightNumber= this.route.snapshot.params['flightNumber'];
    
    this.flightService.getFlightById(this.flightNumber)
      .subscribe(data => {
        console.log(data)
        this.flight = data;
      }, error => console.log(error));

  }

  onSubmit() {
    this.updateFlight();    
  }

  updateFlight() {
    this.flightService.updateflight(this.flightNumber, this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight = new Flight();
    this.reloadData();
    this.gotoList();
  }
  reloadData()
  {
    this.flights=this.flightService.getFlightList();
  }

  gotoList() {
    this.router.navigate(['/flightlist']).then(() => {
      window.location.reload();
    });
  }

}
