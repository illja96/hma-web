import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/services/house/house.service';
import { AvailableHouses } from 'src/models/house/available-houses.model';

@Component({
  selector: 'app-house-index',
  templateUrl: './house-index.component.html',
  styleUrls: ['./house-index.component.css']
})
export class HouseIndexComponent implements OnInit {
  public availableHouses: AvailableHouses;

  constructor(private houseService: HouseService) { }

  public ngOnInit(): void {
    this.houseService.getAvailableHouses()
      .subscribe((availableHouses: AvailableHouses) => this.availableHouses = availableHouses);
  }
}
