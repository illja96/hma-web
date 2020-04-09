import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from 'src/services/user/user.service';
import { tap, filter, switchMap, catchError } from 'rxjs/operators';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { throwError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public socialUser: SocialUser;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private userService: UserService) { }

  public ngOnInit(): void {
    this.authService.authState
      .pipe(
        tap((socialUser: SocialUser) => this.socialUser = socialUser),
        tap((socialUser: SocialUser) => {
          console.log('New auth state');
          console.log(socialUser);
        }),
        filter((socialUser: SocialUser) => socialUser !== null),
        switchMap(() => this.userService.getCurrentUserProfile()),
        catchError((error: HttpErrorResponse) => {
          console.log('Failed to get user profile');
          console.log(error);

          if (error.status === 404) {
            this.modalService.show(UserRegisterComponent);
            return of(null);
          }

          return throwError(error);
        }))
      .subscribe(() => { });

    this.modalService.onHidden
      .pipe(
        switchMap(() => this.userService.getCurrentUserProfile()))
      .subscribe(
        () => { },
        () => this.authService.signOut());
  }

  public onLoginClick(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public onLogoutClick(): void {
    this.authService.signOut();
  }
}
