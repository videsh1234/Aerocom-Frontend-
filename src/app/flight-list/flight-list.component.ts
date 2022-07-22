import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { FlightService } from '../flight.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights:Observable<Flight[]> |any;
  
  constructor(private flightService:FlightService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.flights=this.flightService.getFlightList();
  }

  flightDetails(id:string)
  {
   this.router.navigate(['details',id]);
  }

  editFlight(flightNumber:string){

    this.router.navigate(['update',flightNumber]); //navigate to component from method

  }

  deleteFlight(id: string) {
    this.flightService.deleteFlight(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  


}
