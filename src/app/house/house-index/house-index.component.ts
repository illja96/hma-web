import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HouseService } from 'src/services/house/house.service';
import { AvailableHouses } from 'src/models/house/available-houses.model';
import { HouseCreationModalComponent } from '../house-creation-modal/house-creation-modal.component';
import { switchMap } from 'rxjs/operators';
import { HouseCreationRequest } from 'src/models/house/house-creation-request.model';

@Component({
  selector: 'app-house-index',
  templateUrl: './house-index.component.html',
  styleUrls: ['./house-index.component.css']
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
    const houseCreationModalRef = this.bsModalService.show(HouseCreationModalComponent, { class: 'modal-lg' });
    const houseCreationModal = houseCreationModalRef.content as HouseCreationModalComponent;

    houseCreationModal.houseCreationRequest
      .pipe(
        switchMap((request: HouseCreationRequest) => this.houseService.createHouse(request)))
      .subscribe(() => this.updateAvailableHouses());
  }
}
