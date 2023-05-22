import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from 'src/app/models/weather';
import { BikeserviceService } from 'src/app/services/bikeservice.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  
  constructor(private route:ActivatedRoute,
    private bikeService: BikeserviceService,
    private location: Location) {}

    ngOnInit(): void {
      this.getWeather();
    }

  weather?: Weather;


  getWeather() : void {

    const lon = -6.2603 
    const lat = 53.3498;
    console.log(this.route.snapshot.paramMap);
    this.bikeService.getWeather(lon, lat).subscribe(weather=>this.weather=weather);

  }
}
