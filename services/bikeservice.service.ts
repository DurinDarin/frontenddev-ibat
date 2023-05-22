import { Injectable } from '@angular/core';
import { Bike } from '../models/bike';
import { STATIONS } from '../models/stations';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class BikeserviceService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getBikes(): Observable <Bike[]> {

    const apiKey = '4874233c82831af214beb9a21daa23f0d4340ed8';
    const endpointUrl= `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey};`;
    const bikestations = of(STATIONS);
    this.messageService.add('BikeService: fetched bikestations')
    return this.http.get<Bike[]>(endpointUrl).pipe();

}

getBike(name: string): Observable<Bike> {
  console.log("Name:", name);
  const apiKey = '4874233c82831af214beb9a21daa23f0d4340ed8';
  const endpointUrl = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`;
  this.messageService.add(`bikeService: fetched ${name} from api`);
  return this.http.get<Bike>(endpointUrl);
}

getWeather(lon: number, lat: number): Observable <Weather>{
  console.log("Lon:", lon);
  console.log("Lat:", lat);
  const apiKey = '6b8ff90c67fe6387d7ab6ef729f5be50';
  const endpointUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return this.http.get<Weather>(endpointUrl)
}

}




//NEED TO UPLOAD A GITHUB LINK TO THE PROJECT AND UPLOAD A SHORT YOUTUBE VIDEO OF THE PROGRAM RUNNING