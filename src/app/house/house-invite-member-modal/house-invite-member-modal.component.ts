import { Component, Output, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HouseInviteCreationRequest } from 'src/models/house-invite/house-invite-creation-request.model';
import { Subject } from 'rxjs';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';

@Component({
  templateUrl: './house-invite-member-modal.component.html'
})
export class HouseInviteMemberModalComponent {
  @Input()
  public houseInfo: HouseSimpleInfo;

  @Output()
  public get houseInviteCreationRequest(): Subject<HouseInviteCreationRequest> {
    return this.houseInviteCreationRequestSubject;
  }

  public houseInviteCreationRequestForm: FormGroup;
  public get userEmail(): AbstractControl {
    return this.houseInviteCreationRequestForm.controls.userEmail;
  }

  private houseInviteCreationRequestSubject: Subject<HouseInviteCreationRequest>;

  constructor(public bsModalRef: BsModalRef) {
    this.houseInviteCreationRequestSubject = new Subject<HouseInviteCreationRequest>();

    this.houseInviteCreationRequestForm = new FormGroup({
      userEmail: new FormControl(undefined, [Validators.required, Validators.email])
    });
  }

  public onHouseInviteCreationRequestFormSubmit(): void {
    const houseInviteCreationRequest = this.houseInviteCreationRequestForm.value as HouseInviteCreationRequest;
    houseInviteCreationRequest.houseId = this.houseInfo.id;

    this.houseInviteCreationRequestSubject.next(houseInviteCreationRequest);
    this.bsModalRef.hide();
  }
}
