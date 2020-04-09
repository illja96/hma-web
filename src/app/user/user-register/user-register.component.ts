import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService, SocialUser } from 'angularx-social-login';
import { UserService } from 'src/services/user/user.service';

@Component({
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public socialUser: SocialUser;

  constructor(
    private bsModalRef: BsModalRef,
    private authService: AuthService,
    private userService: UserService) { }

  public ngOnInit(): void {
    this.authService.authState
      .subscribe((socialUser: SocialUser) => this.socialUser = socialUser);
  }

  public onRegisterClick(): void {
    this.userService.registerUser()
      .subscribe(() => this.bsModalRef.hide());
  }

  public onCancelClick(): void {
    this.bsModalRef.hide();
  }
}
