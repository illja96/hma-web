import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html'
})
export class HomeIndexComponent implements OnInit {
  public user: SocialUser;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.authState.subscribe((user: SocialUser) => this.user = user);
  }
}
