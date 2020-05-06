import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { UserService } from 'src/services/user/user.service';
import { filter, switchMap, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public socialUser: SocialUser;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService) { }

  public ngOnInit(): void {
    this.authService.authState
      .subscribe((socialUser: SocialUser) => this.socialUser = socialUser);

    this.authService.authState
      .pipe(
        filter((socialUser: SocialUser) => socialUser !== null),
        switchMap(() => this.userService.getCurrentUserProfile()),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.router.navigateByUrl('/profile/registration');
            return of(null);
          }

          return throwError(error);
        }))
      .subscribe(() => { });
  }

  public onLoginClick(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public onLogoutClick(): void {
    this.authService.signOut();
  }
}
