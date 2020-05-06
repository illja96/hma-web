import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { UserService } from 'src/services/user/user.service';

@Component({
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService) { }

  public onRegisterClick(): void {
    this.userService.registerUser()
      .subscribe(() => this.router.navigateByUrl('/profile'));
  }

  public onCancelClick(): void {
    this.authService.signOut()
      .then(() => this.router.navigateByUrl('/'));
  }
}
