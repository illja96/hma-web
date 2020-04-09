import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AvailableHouses } from 'src/models/house/available-houses.model';
import { Observable } from 'rxjs';
import { HouseSimpleInfo } from 'src/models/house/house-simple-info.model';
import { HouseCreationRequest } from 'src/models/house/house-creation-request.model';

@Injectable()
export class HouseService {
  constructor(private httpClient: HttpClient) { }

  public getAvailableHouses(): Observable<AvailableHouses> {
    const url = `${environment.apiServerBaseUrl}/houses`;

    return this.httpClient.get<AvailableHouses>(url);
  }

  public getHouseById(id: string): Observable<HouseSimpleInfo> {
    const url = `${environment.apiServerBaseUrl}/houses/${id}`;

    return this.httpClient.get<HouseSimpleInfo>(url);
  }

  public createHouse(houseCreationRequest: HouseCreationRequest): Observable<HouseSimpleInfo> {
    const url = `${environment.apiServerBaseUrl}/houses`;

    return this.httpClient.post<HouseSimpleInfo>(url, houseCreationRequest);
  }

  public deleteHouse(id: string): Observable<any> {
    const url = `${environment.apiServerBaseUrl}/houses/${id}`;

    return this.httpClient.delete(url);
  }
}
