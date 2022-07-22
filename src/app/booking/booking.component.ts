import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Booking} from '../booking';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Seats} from '../seats';
import { BookingService } from '../booking.service';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingId:string|any;
  bookingDate:Date|any;
	email: string | any;
	
  flightNumber:string | any;
  flight:Flight | any;

	passengerName:string|any;
	passengerAge:string|any;
	passportNumber:string|any;
	price:number=0;
	bookingStatus: boolean|any;
  totalAmount:number=0;
  
  bookingDetails:Booking[]|any;

  bookingForm: FormGroup|any;
  submitted = false;
  seats:any =["1A","2A","3A","4A","5A","6A","7A","8A","9A","10A","11A","12A",
  "1B","2B","3B","4B","5B","6B","7B","8B","9B","10B","11B",
  "1C","2C","3C","4C","5C","6C","7C","8C","9C","10C","11C","12C",
  "1D","2D","3D","4D","5D","6D","7D","8D","9D","10D","11D","12D",
  "5E","6E","7E","8E","9E","10E","11E",
  "5F","6F","7F","8F","9F","10F","11F","12F",
];
  seatId:any=[];
  


  booking: Booking= new Booking();
  constructor(private formBuilder: FormBuilder,private bookingService: BookingService,
  private router: Router,private flightService: FlightService, private route:ActivatedRoute
  ) { }
  handler:any = null;
  ngOnInit(): void {

    
    this.flight=new Flight();
    this.flightNumber=this.route.snapshot.params['flightNumber'];
    this.bookingForm = this.formBuilder.group({
      passengerName: ['',[ Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      bookingDate: ['', [Validators.required]],
      passportNumber:  ['', [Validators.required]],
      passengerAge:  ['', [Validators.required]],
      seatId:  ['', [Validators.required]]
  });
  this.flightService.bookFlight(this.flightNumber).subscribe(data => {
    console.log(data)
    this.flight = data;
  }, error => console.log(error));
  
  this.loadStripe()

  }

  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Payment Successful!!');
        window.location.href='\printTicket';
      }
    });
    
    
    handler.open({
      name: 'Make Payment',

      amount: amount*100,
    });
 
  }
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
          
        });
        
      }
       
      window.document.body.appendChild(s);
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.bookingForm.controls; }


  onSubmit() {
          
          this.submitted=true;
          this.booking=this.bookingForm.value;
          
          // if(this.bookingForm.invalid){
          //   return
          // }
         
          this.save();
          
      }
    
    Booking():void{
      this.submitted=false;
      this.booking=new Booking();
    }

    save(){
      this.booking.email=this.email;
      this.booking.flight=this.flight;
      this.booking.passengerName=this.passengerName;
      this.booking.passengerAge=this.passengerAge;
      this.booking.price=this.flight.price;
      this.booking.passportNumber=this.passportNumber;
      this.booking.bookingStatus=true;
      this.booking.bookingDate=this.bookingDate;
      this.booking.seatId=this.seatId.name;
      this.bookingService.saveBooking(this.booking).subscribe(data=>console.log(data), error=>(alert("Seat is already booked, Please try another seat"),window.location.href='/booking/'+this.flightNumber ));
      this.booking=new Booking();
      
      
    }
    gotoList(){
      this.router.navigate(['/printTicket']);
    }

}