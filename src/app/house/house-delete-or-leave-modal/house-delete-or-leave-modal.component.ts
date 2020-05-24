import { Component, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-house-delete-or-leave-modal',
  templateUrl: './house-delete-or-leave-modal.component.html'
})
export class HouseDeleteOrLeaveModalComponent {
  @Input()
  public isUserHouseOwner: boolean;

  @Output()
  public get deleteConfirmed(): Subject<boolean> {
    return this.deleteConfirmedSubject;
  }

  private deleteConfirmedSubject: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {
    this.deleteConfirmedSubject = new Subject<boolean>();
  }

  public onDeleteClick(): void {
    this.deleteConfirmedSubject.next(true);
    this.bsModalRef.hide();
  }
}
