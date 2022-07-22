import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  passportNumber:string | any;
  bookings :Booking[] | any;
  booking : Booking = new Booking();
  bookingId:string|any;
  constructor(
    private bookingService:BookingService,
    private router:Router,
    private route : ActivatedRoute)  { }

  ngOnInit(): void {
 
    

     /* Snapshot is used to get the Route Parameters */
    // this.passportNumber=this.route.snapshot.params['passportNumber'];

    // this.bookingService.getTicketInfo(this.passportNumber)
    //  .subscribe(data => {
    //    console.log(data)
    //    this.bookings = data;
    //  }, error => console.log(error));

     this.bookingId=this.route.snapshot.params['bookingId'];

     this.bookingService.getTicketInfoById(this.bookingId)
     .subscribe(data => {
       console.log(data)
       this.bookings = data;
     }, error => console.log(error));
  }

}
