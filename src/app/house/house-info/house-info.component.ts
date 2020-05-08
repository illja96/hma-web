import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';
import { HouseService } from 'src/services/house/house.service';
import { HouseDeletionModalComponent } from '../house-deletion-modal/house-deletion-modal.component';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {
  public houseInfo: HouseSimpleInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private houseService: HouseService,
    private bsModalService: BsModalService) { }

  public ngOnInit(): void {
    const houseId = this.route.snapshot.paramMap.get('houseId');
    this.houseService.getHouseById(houseId)
      .subscribe((houseInfo: HouseSimpleInfo) => this.houseInfo = houseInfo);
  }

  public onDeleteClick(): void {
    const houseDeletionModalRef = this.bsModalService.show(HouseDeletionModalComponent);
    const houseDeletionModal = houseDeletionModalRef.content as HouseDeletionModalComponent;

    houseDeletionModal.deleteConfirmed
      .pipe(
        filter((isDeleteConfirmed: boolean) => isDeleteConfirmed),
        switchMap(() => this.houseService.deleteHouse(this.houseInfo.id)))
      .subscribe(() => this.router.navigateByUrl('/houses'));
  }
}
