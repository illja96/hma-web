import { Component, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HouseCreationRequest } from 'src/models/house/house-creation-request.model';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './house-create-modal.component.html'
})
export class HouseCreateModalComponent {
  @Output()
  public get houseCreationRequest(): Subject<HouseCreationRequest> {
    return this.houseCreationRequestSubject;
  }

  public houseCreationRequestForm: FormGroup;
  public get name(): AbstractControl {
    return this.houseCreationRequestForm.controls.name;
  }

  private houseCreationRequestSubject: Subject<HouseCreationRequest>;

  constructor(public bsModalRef: BsModalRef) {
    this.houseCreationRequestSubject = new Subject<HouseCreationRequest>();

    this.houseCreationRequestForm = new FormGroup({
      name: new FormControl(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(100)])
    });
  }

  public onHouseCreationRequestFormSubmit(): void {
    const houseCreationRequest = this.houseCreationRequestForm.value as HouseCreationRequest;
    this.houseCreationRequestSubject.next(houseCreationRequest);
    this.bsModalRef.hide();
  }
}
