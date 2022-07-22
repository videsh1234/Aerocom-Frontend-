import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flight_id = '';
  flightNumber='';
  flightName = '';
  fromLocation='';
  toLocation='';
  departureTime='';
  arrivalTime='';
  price=0;
  date='';

  baseUrl='http://localhost:9090/aerocom/api/admin/flightSearch';  
  baseUrl2='http://localhost:9090/aerocom/api/admin/findFlight';
  baseUrl3='http://localhost:9090/aerocom/api/flight';
  constructor(private http:HttpClient){}
  getFlight(fromLocation:string, toLocation:string ,date:string):Observable<any> {
    return this.http.get(`${this.baseUrl}/${fromLocation}/${toLocation}/${date}`);
}

  bookFlight(flightNumber:string):Observable<any>{
    return this.http.get(`${this.baseUrl2}/${flightNumber}`);
  }
  getFlightList():Observable<any>{
    return this.http.get(`http://localhost:9090/aerocom/api/admin/allFlights` );
  }

  getFlightById(flightNumber:string):Observable<any>{
    return this.http.get(`${this.baseUrl2}/${flightNumber}`);
  }

  newFlight(flight:Object):Observable<Object>{
    return this.http.post(`http://localhost:9090/aerocom/api/addFlight`,flight);
  }
  updateflight(flightNumber:string,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl3}/${flightNumber}`,value);
  }

  deleteFlight(id:string):Observable<any>
  {
    return this.http.delete(`${this.baseUrl3}/${id}`,{responseType:'text'});
  }
}