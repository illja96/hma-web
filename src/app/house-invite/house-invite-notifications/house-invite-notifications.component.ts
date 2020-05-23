import { Component } from '@angular/core';
import { HouseInviteService } from 'src/services/house-invite/house-invite.service';
import { HouseInviteSimpleInfo } from 'src/models/house-invite/house-invite-simple-info.model';

@Component({
  selector: 'app-house-invite-notifications',
  templateUrl: './house-invite-notifications.component.html',
  styleUrls: ['./house-invite-notifications.component.css']
})
export class HouseInviteNotificationsComponent {
  public houseInvites: HouseInviteSimpleInfo[];

  constructor(private houseInviteService: HouseInviteService) {
    this.updateHouseInvites();
  }

  public onRefreshHouseInvitesClick(): void {
    this.updateHouseInvites();
  }

  public onAcceptHouseInviteClick(houseInviteId: string): void {

  }

  public onDeclineHouseInviteClick(houseInviteId: string): void {

  }

  private updateHouseInvites(): void {
    this.houseInviteService.getAvailableInvites()
      .subscribe((houseInvites: HouseInviteSimpleInfo[]) => this.houseInvites = houseInvites);
  }
}
