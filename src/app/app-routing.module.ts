import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutComponent } from './logout/logout.component';
import { BookingComponent } from './booking/booking.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { PrintTicketComponent } from './print-ticket/print-ticket.component';

const routes: Routes = [  
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent},

  { path:'loginuser',component:LoginUserComponent},
  { path:'registeruser',component:RegisterUserComponent},
  { path:'booking/:flightNumber',component:BookingComponent},      
  { path:'searchFlight',component:SearchFlightComponent}, 
  {path:'flightlist',component:FlightListComponent},    
  {path:'addflight',component:AddFlightComponent},
  
  {path:'payment',component:PaymentComponent},
  {path:'cancelBooking',component:CancelBookingComponent},
  {path:'logout',component:LogoutComponent},
  {path:'loginadmin',component:LoginAdminComponent},
  {path:'update/:flightNumber',component:UpdateFlightComponent},
  {path:'aboutUs',component:AboutComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'viewDetail/:bookingId',component:ViewDetailComponent},
  {path:'printTicket',component:PrintTicketComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
