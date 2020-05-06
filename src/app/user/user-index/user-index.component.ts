import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';
import { UserInfo } from 'src/models/user/user-info.model';

@Component({
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  public userInfo: UserInfo;

  constructor(private userService: UserService) { }

  public ngOnInit(): void {
    this.userService.getCurrentUserProfile()
      .subscribe((userInfo: UserInfo) => this.userInfo = userInfo);
  }
}
