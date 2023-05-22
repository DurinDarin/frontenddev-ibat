import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { STATIONS } from 'src/app/models/stations';
import { BikeserviceService } from 'src/app/services/bikeservice.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-bikestations',
  templateUrl: './bikestation.component.html',
  styleUrls: ['./bikestation.component.css']
})
export class BikestationComponent implements OnInit {

  constructor(private bikeService: BikeserviceService, private messageService: MessageService) {}

  ngOnInit(): void {
    
    this.getBikes();
    
  }

  bikestation?: Bike[];

  getBikes(): void {

    this.bikeService.getBikes().subscribe(bikestation => this.bikestation=bikestation);
  }

}