import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikestationComponent } from './components/bikestation/bikestation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BikedetailsComponent } from './components/bikedetails/bikedetails.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [

  {path: 'bikestation' , component : BikestationComponent},
  //{path: 'dashboard' , component: DashboardComponent},
  {path: 'detail/:name' , component: BikedetailsComponent},
  {path: 'weather' , component: WeatherComponent},
  {path: '' , redirectTo: '/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
