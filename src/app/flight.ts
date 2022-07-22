import { Time } from "@angular/common";


export class Flight {

    flight_id:string|any;
    flightNumber:string|any;
    flightName:string|any;
    fromLocation:string|any;
    toLocation:string|any;
    departureTime:Time|any;
    arrivalTime:Time|any;
    price:number=0;
    date:string|any;
}
