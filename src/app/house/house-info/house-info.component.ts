import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';
import { HouseService } from 'src/services/house/house.service';

@Component({
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {
  public houseInfo: HouseSimpleInfo;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService) { }

  public ngOnInit(): void {
    const houseId = this.route.snapshot.paramMap.get('houseId');
    this.houseService.getHouseById(houseId)
      .subscribe((houseInfo: HouseSimpleInfo) => this.houseInfo = houseInfo);
  }
}
