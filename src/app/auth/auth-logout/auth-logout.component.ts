import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.css']
})
export class AuthLogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  public ngOnInit(): void {
    this.authService.authState
      .pipe(
        filter((user: SocialUser) => user == null)
      )
      .subscribe(() => this.router.navigateByUrl('/auth/login'));
  }

  public onLogoutClick(): void {
    this.authService.signOut();
  }
}
