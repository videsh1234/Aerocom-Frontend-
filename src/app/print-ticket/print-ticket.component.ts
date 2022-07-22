import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.css']
})
export class PrintTicketComponent implements OnInit {

  bookings:Booking[] | any;
  
  constructor(private bookingService:BookingService,
    private router:Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.bookingService.getLatestBooking().subscribe(data => {
      console.log(data)
      this.bookings = data;
    }, error => console.log(error));;
    console.log(this.bookings);
  }

}
