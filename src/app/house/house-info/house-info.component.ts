import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';
import { HouseService } from 'src/services/house/house.service';
import { HouseDeleteOrLeaveModalComponent } from '../house-delete-or-leave-modal/house-delete-or-leave-modal.component';
import { tap, switchMap, filter } from 'rxjs/operators';

@Component({
  templateUrl: './house-info.component.html'
})
export class HouseInfoComponent implements OnInit {
  public houseInfo: HouseSimpleInfo;
  public isUserHouseOwner: boolean;

  private socialUser: SocialUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private houseService: HouseService,
    private bsModalService: BsModalService) { }

  public ngOnInit(): void {
    const houseId = this.route.snapshot.paramMap.get('houseId');

    this.authService.authState
      .pipe(
        tap((socialUser: SocialUser) => this.socialUser = socialUser),
        switchMap(() => this.houseService.getHouseById(houseId)),
        tap((houseInfo: HouseSimpleInfo) => this.houseInfo = houseInfo))
      .subscribe(() => this.isUserHouseOwner = this.houseInfo.ownerInfo.googleId == this.socialUser.id);
  }

  public onDeleteOrLeaveClick(): void {
    const houseDeletionModalRef = this.bsModalService.show(
      HouseDeleteOrLeaveModalComponent,
      {
        initialState: {
          isUserHouseOwner: this.isUserHouseOwner,
          houseInfo: this.houseInfo
        }
      });

    const houseDeletionModal = houseDeletionModalRef.content as HouseDeleteOrLeaveModalComponent;

    houseDeletionModal.deleteConfirmed
      .pipe(
        filter((isDeleteConfirmed: boolean) => isDeleteConfirmed),
        switchMap(() => this.houseService.deleteOrLeaveHouse(this.houseInfo.id)))
      .subscribe(() => this.router.navigateByUrl('/houses'));
  }
}
