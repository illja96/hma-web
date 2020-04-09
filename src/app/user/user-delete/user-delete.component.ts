import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'angularx-social-login';
import { UserService } from 'src/services/user/user.service';

@Component({
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
    private authService: AuthService,
    private userService: UserService) { }

  public ngOnInit(): void { }

  public onDeleteUserProfileClick(): void { }

  public onCancelClick(): void {
    this.bsModalRef.hide();
  }
}
