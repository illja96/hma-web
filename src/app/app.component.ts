import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public iconsClass: string[];

  public user: SocialUser;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.authState.subscribe((user: SocialUser) => this.user = user);
  }

  public onLoginClick(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public onLogoutClick(): void {
    this.authService.signOut();
  }
}
