import { Component, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';
import { UserSimpleInfo } from 'src/models/user/user-simple-info.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-house-info-remove-member-modal',
  templateUrl: './house-info-remove-member-modal.component.html'
})
export class HouseInfoRemoveMemberModalComponent {
  @Input()
  public houseInfo: HouseSimpleInfo;

  @Input()
  public memberInfo: UserSimpleInfo;

  @Output()
  public get removeConfirmed(): Subject<boolean> {
    return this.removeConfirmedSubject;
  }

  private removeConfirmedSubject: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {
    this.removeConfirmedSubject = new Subject<boolean>();
  }

  public onRemoveClick(): void {
    this.removeConfirmedSubject.next(true);
    this.bsModalRef.hide();
  }
}
