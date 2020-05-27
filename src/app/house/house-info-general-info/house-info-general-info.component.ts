import { Component, Input } from '@angular/core';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';

@Component({
  selector: 'app-house-info-general-info',
  templateUrl: './house-info-general-info.component.html'
})
export class HouseInfoGeneralInfoComponent {
  @Input()
  public houseInfo: HouseSimpleInfo;
}
