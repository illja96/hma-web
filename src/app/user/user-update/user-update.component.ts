import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/services/user/user.service';

@Component({
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
    private userService: UserService) { }

  public ngOnInit(): void { }

  public onUserUpdateClick(): void {
    this.userService.updateCurrentUserProfile()
      .subscribe(() => { });
  }

  public onCancelClick(): void {
    this.bsModalRef.hide();
  }
}
