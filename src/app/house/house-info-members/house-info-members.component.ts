import { Component, OnInit, Input } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HouseService } from 'src/services/house/house.service';
import { HouseInviteService } from 'src/services/house-invite/house-invite.service';
import { HouseInfoInviteMemberModalComponent } from '../house-info-invite-member-modal/house-info-invite-member-modal.component';
import { HouseInfoRemoveMemberModalComponent } from '../house-info-remove-member-modal/house-info-remove-member-modal.component';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';
import { UserSimpleInfo } from 'src/models/user/user-simple-info.model';
import { HouseInviteCreationRequest } from 'src/models/house-invite/house-invite-creation-request.model';
import { switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-house-info-members',
  templateUrl: './house-info-members.component.html'
})
export class HouseInfoMembersComponent implements OnInit {
  @Input()
  public houseInfo: HouseSimpleInfo;

  public isUserHouseOwner: boolean;

  constructor(
    private houseService: HouseService,
    private houseInviteService: HouseInviteService,
    private authService: AuthService,
    private bsModalService: BsModalService) { }

  public ngOnInit(): void {
    this.authService.authState
      .subscribe((socialUser: SocialUser) => this.isUserHouseOwner = this.houseInfo.ownerInfo.googleId == socialUser.id)
  }

  public onInviteNewMemberClick(): void {
    const houseInfoInviteMemberModalRef = this.bsModalService.show(
      HouseInfoInviteMemberModalComponent,
      { initialState: { houseInfo: this.houseInfo } });

    const houseInfoInviteMemberModal = houseInfoInviteMemberModalRef.content as HouseInfoInviteMemberModalComponent;

    // TODO: Add invite creation confirmation on UI
    houseInfoInviteMemberModal.houseInviteCreationRequest
      .pipe(
        switchMap((hicr: HouseInviteCreationRequest) => this.houseInviteService.createHouseInvite(hicr)))
      .subscribe();
  }

  public onRemoveMemberClick(memberInfo: UserSimpleInfo): void {
    const houseInfoRemoveMemberModalRef = this.bsModalService.show(
      HouseInfoRemoveMemberModalComponent,
      {
        initialState: {
          houseInfo: this.houseInfo,
          memberInfo: memberInfo
        }
      });

    const houseInfoRemoveMemberModal = houseInfoRemoveMemberModalRef.content as HouseInfoRemoveMemberModalComponent;

    // TODO: Add invite creation confirmation on UI
    houseInfoRemoveMemberModal.removeConfirmed
      .pipe(
        filter((isRemoveConfirmed: boolean) => isRemoveConfirmed),
        switchMap(() => this.houseService.removeMember(this.houseInfo.id, memberInfo.googleId)))
      .subscribe(() => {
        const memberInfoIndex = this.houseInfo.memberInfos.indexOf(memberInfo);
        this.houseInfo.memberInfos = this.houseInfo.memberInfos.splice(memberInfoIndex, 1);
      });
  }
}
