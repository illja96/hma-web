import { Component, OnInit, Input } from '@angular/core';
import { HouseInviteService } from 'src/services/house-invite/house-invite.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HouseInviteMemberModalComponent } from '../house-invite-member-modal/house-invite-member-modal.component';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';
import { HouseInviteCreationRequest } from 'src/models/house-invite/house-invite-creation-request.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-house-info-members',
  templateUrl: './house-info-members.component.html'
})
export class HouseInfoMembersComponent implements OnInit {
  @Input()
  public houseInfo: HouseSimpleInfo;

  public isUserHouseOwner: boolean;

  constructor(
    private houseInviteService: HouseInviteService,
    private authService: AuthService,
    private bsModalService: BsModalService) { }

  public ngOnInit(): void {
    this.authService.authState
      .subscribe((socialUser: SocialUser) => this.isUserHouseOwner = this.houseInfo.ownerInfo.googleId == socialUser.id)
  }

  public onInviteNewMemberClick(): void {
    const houseInviteMemberModalRef = this.bsModalService.show(HouseInviteMemberModalComponent, { initialState: { houseInfo: this.houseInfo } });
    const houseInviteMemberModal = houseInviteMemberModalRef.content as HouseInviteMemberModalComponent;

    // TODO: Add invite creation confirmation on UI
    houseInviteMemberModal.houseInviteCreationRequest
      .pipe(
        switchMap((houseInviteCreationRequest: HouseInviteCreationRequest) => this.houseInviteService.createHouseInvite(houseInviteCreationRequest)))
      .subscribe();
  }
}
