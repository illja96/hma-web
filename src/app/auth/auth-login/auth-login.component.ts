import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  public ngOnInit(): void {
    this.authService.authState
      .pipe(
        filter((user: SocialUser) => user != null)
      )
      .subscribe(() => this.router.navigateByUrl('/'));
  }

  public onGoogleLoginClick(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
