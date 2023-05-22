import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bike } from 'src/app/models/bike';
import { BikeserviceService } from 'src/app/services/bikeservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bikedetails',
  templateUrl: './bikedetails.component.html',
  styleUrls: ['./bikedetails.component.css']
  })

export class BikedetailsComponent implements OnInit {
@Input() bike? : Bike;


  constructor(
    private route:ActivatedRoute,
    private bikeService:BikeserviceService,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.getBike();
    
  }

  getBike() : void {
    console.log(this.route.snapshot.paramMap);

    const name = String(this.route.snapshot.paramMap.get('name'));

    this.bikeService.getBike(name).subscribe(bike=>this.bike=bike);

  }

}


  // const apiKey = '4874233c82831af214beb9a21daa23f0d4340ed8';
  // const url = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`;


