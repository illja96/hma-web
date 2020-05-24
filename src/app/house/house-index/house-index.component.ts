import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HouseService } from 'src/services/house/house.service';
import { AvailableHouses } from 'src/models/house/available-houses.model';
import { HouseCreateModalComponent } from '../house-create-modal/house-create-modal.component';
import { switchMap } from 'rxjs/operators';
import { HouseCreationRequest } from 'src/models/house/house-creation-request.model';

@Component({
  selector: 'app-house-index',
  templateUrl: './house-index.component.html'
})
export class HouseIndexComponent implements OnInit {
  public availableHouses: AvailableHouses;

  constructor(
    private houseService: HouseService,
    private bsModalService: BsModalService) { }

  public ngOnInit(): void {
    this.updateAvailableHouses();
  }

  public updateAvailableHouses(): void {
    this.availableHouses = undefined;
    this.houseService.getAvailableHouses()
      .subscribe((availableHouses: AvailableHouses) => this.availableHouses = availableHouses);
  }

  public onCreateHouseClick(): void {
    const houseCreateModalRef = this.bsModalService.show(HouseCreateModalComponent, { class: 'modal-lg' });
    const houseCreateModal = houseCreateModalRef.content as HouseCreateModalComponent;

    houseCreateModal.houseCreationRequest
      .pipe(
        switchMap((request: HouseCreationRequest) => this.houseService.createHouse(request)))
      .subscribe(() => this.updateAvailableHouses());
  }
}
