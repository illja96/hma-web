import { Component, Input } from '@angular/core';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';

@Component({
  selector: 'app-house-index-card',
  templateUrl: './house-index-card.component.html',
  styleUrls: ['./house-index-card.component.css']
})
export class HouseIndexCardComponent {
  @Input()
  public houseInfo: HouseSimpleInfo;
}
