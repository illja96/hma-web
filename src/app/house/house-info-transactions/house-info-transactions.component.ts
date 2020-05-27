import { Component, Input } from '@angular/core';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';

@Component({
  selector: 'app-house-info-transactions',
  templateUrl: './house-info-transactions.component.html'
})
export class HouseInfoTransactionsComponent {
  @Input()
  public houseInfo: HouseSimpleInfo;
}
