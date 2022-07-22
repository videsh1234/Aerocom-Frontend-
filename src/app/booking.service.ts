import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingId:string|any;
  passportNumber:string|any;
  totalAmount:number=0;
  email='';
  baseUrl='http://localhost:9090/aerocom/api/booking';
  baseUrl2='http://localhost:9090/aerocom/api/booking/details';
  baseUrl3='http://localhost:9090/aerocom/api/booking/details/byId';
  constructor(private http:HttpClient) { }

  saveBooking(booking:Object):Observable<Object>
  {
    return this.http.post('http://localhost:9090/aerocom/api/booking',booking);
  }

  getBookingDetails(email:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${email}`);
  }

  cancelBookingFlight(passportNumber:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${passportNumber}`,{responseType:'text'});
  }
  getTicketInfo(passportNumber:string):Observable<any>{
    return this.http.get(`${this.baseUrl2}/${passportNumber}`);
  }
  getTicketInfoById(bookingId:string):Observable<any>{
    return this.http.get(`${this.baseUrl3}/${bookingId}`);
  }
  getLatestBooking():Observable<any>{
    return this.http.get('http://localhost:9090/aerocom/api/latest');
  }
}
