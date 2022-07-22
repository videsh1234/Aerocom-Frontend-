import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookingComponent } from './booking/booking.component';

import { PaymentComponent } from './payment/payment.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { PrintTicketComponent } from './print-ticket/print-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFlightComponent,
    BookingComponent,

    PaymentComponent,
    CancelBookingComponent,
    LoginUserComponent,
    RegisterUserComponent,
    LogoutComponent,
    LoginAdminComponent,
    FlightListComponent,
    UpdateFlightComponent,
    AddFlightComponent,
    AboutComponent,
    ContactUsComponent,
    ViewDetailComponent,
    PrintTicketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    NgSelectModule,
    HttpClientModule,
ReactiveFormsModule,
NgxPrintModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

