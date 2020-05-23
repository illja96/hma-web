import { Component, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-house-deletion-modal',
  templateUrl: './house-deletion-modal.component.html'
})
export class HouseDeletionModalComponent {
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
