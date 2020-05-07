import { Component } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { UserService } from 'src/services/user/user.service';

@Component({
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService) { }

  public onDeleteProfileClick(): void {
    this.userService.deleteUserProfile()
      .subscribe(() => this.authService.signOut());
  }
}
