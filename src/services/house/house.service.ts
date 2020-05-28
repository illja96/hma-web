import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AvailableHouses } from 'src/models/house/available-houses.model';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';
import { HouseCreationRequest } from 'src/models/house/house-creation-request.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HouseService {
  constructor(private httpClient: HttpClient) { }

  public getAvailableHouses(): Observable<AvailableHouses> {
    const url = `${environment.apiServerBaseUrl}/houses`;

    return this.httpClient.get<AvailableHouses>(url)
      .pipe(
        map((availableHouses: AvailableHouses) => {
          availableHouses.owned.map((house: HouseSimpleInfo) => house.creationDate = new Date(house.creationDate));
          availableHouses.memberOf.map((house: HouseSimpleInfo) => house.creationDate = new Date(house.creationDate));

          availableHouses.owned = availableHouses.owned.sort((a, b) => this.compareHouses(b, a));
          availableHouses.memberOf = availableHouses.memberOf.sort((a, b) => this.compareHouses(b, a));

          return availableHouses;
        })
      );
  }

  public getHouseById(id: string): Observable<HouseSimpleInfo> {
    const url = `${environment.apiServerBaseUrl}/houses/${id}`;

    return this.httpClient.get<HouseSimpleInfo>(url)
      .pipe(
        map((houseSimpleInfo: HouseSimpleInfo) => {
          houseSimpleInfo.creationDate = new Date(houseSimpleInfo.creationDate);
          return houseSimpleInfo;
        }));
  }

  public createHouse(houseCreationRequest: HouseCreationRequest): Observable<HouseSimpleInfo> {
    const url = `${environment.apiServerBaseUrl}/houses`;

    return this.httpClient.post<HouseSimpleInfo>(url, houseCreationRequest)
      .pipe(
        map((houseSimpleInfo: HouseSimpleInfo) => {
          houseSimpleInfo.creationDate = new Date(houseSimpleInfo.creationDate);
          return houseSimpleInfo;
        }));;
  }

  public deleteOrLeaveHouse(id: string): Observable<any> {
    const url = `${environment.apiServerBaseUrl}/houses/${id}`;

    return this.httpClient.delete(url);
  }

  public removeMember(houseId: string, userId: string): Observable<any> {
    const url = `${environment.apiServerBaseUrl}/houses/${houseId}/members/${userId}`;

    return this.httpClient.delete(url);
  }

  private compareHouses(a: HouseSimpleInfo, b: HouseSimpleInfo): number {
    const dateComparison = a.creationDate.getTime() - b.creationDate.getTime();
    if (dateComparison !== 0) return dateComparison;

    const nameComparison = a.name.localeCompare(b.name);
    return nameComparison;
  }
}
