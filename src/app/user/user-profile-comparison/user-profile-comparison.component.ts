import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { UserService } from 'src/services/user/user.service';
import { UserInfo } from 'src/models/user/user-info.model';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile-comparison',
  templateUrl: './user-profile-comparison.component.html'
})
export class UserProfileComparisonComponent implements OnInit {
  public googleUserProfile: SocialUser;
  public hmaUserProfile: UserInfo;

  public isProfileNeededToSync: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService) { }

  public ngOnInit(): void {
    this.updateProfiles();
  }

  public updateProfiles(): void {
    this.authService.authState
      .pipe(
        tap((socialUser: SocialUser) => {
          socialUser.photoUrl = socialUser.photoUrl.replace(/(=[\w\d-]+)/g, '');
          this.googleUserProfile = socialUser;
        }),
        switchMap(() => this.userService.getCurrentUserProfile()),
        tap((userInfo: UserInfo) => {
          userInfo.pictureUrl = userInfo.pictureUrl.replace(/(=[\w\d-]+)/g, '');
          this.hmaUserProfile = userInfo;
        }))
      .subscribe(() => {
        const isProfilesMissmatching =
          this.googleUserProfile.id !== this.hmaUserProfile.googleId ||
          this.googleUserProfile.email !== this.hmaUserProfile.email ||
          this.googleUserProfile.firstName !== this.hmaUserProfile.givenName ||
          this.googleUserProfile.lastName !== this.hmaUserProfile.familyName ||
          this.googleUserProfile.photoUrl !== this.hmaUserProfile.pictureUrl;

        if (isProfilesMissmatching) {
          this.isProfileNeededToSync = true;
        }
      });
  }

  public onSyncClick(): void {
    this.googleUserProfile = null;
    this.hmaUserProfile = null;

    this.userService.updateCurrentUserProfile()
      .subscribe(() => this.updateProfiles());
  }
}
