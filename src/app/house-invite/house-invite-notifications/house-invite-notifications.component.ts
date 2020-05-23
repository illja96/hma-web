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

  public onAcceptHouseInviteClick(houseInvite: HouseInviteSimpleInfo): void {
    this.removeHouseInviteFromList(houseInvite);

    // TODO: Add notification for user interaction
    this.houseInviteService.acceptHouseInvite(houseInvite.id)
      .subscribe(() => this.updateHouseInvites());
  }

  public onDeclineHouseInviteClick(houseInvite: HouseInviteSimpleInfo): void {
    this.removeHouseInviteFromList(houseInvite);

    // TODO: Add notification for user interaction
    this.houseInviteService.declineHouseInvite(houseInvite.id)
      .subscribe(() => this.updateHouseInvites());
  }

  private updateHouseInvites(): void {
    this.houseInviteService.getAvailableInvites()
      .subscribe((houseInvites: HouseInviteSimpleInfo[]) => this.houseInvites = houseInvites);
  }

  private removeHouseInviteFromList(houseInvite: HouseInviteSimpleInfo): void {
    const houseInviteIndex = this.houseInvites.indexOf(houseInvite);
    this.houseInvites = this.houseInvites.splice(houseInviteIndex, 1);
  }
}
