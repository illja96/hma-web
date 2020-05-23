import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HouseInviteSimpleInfo } from 'src/models/house-invite/house-invite-simple-info.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HouseInviteCreationRequest } from 'src/models/house-invite/house-invite-creation-request.model';

@Injectable()
export class HouseInviteService {
  constructor(private httpClient: HttpClient) { }

  public getAvailableInvites(): Observable<HouseInviteSimpleInfo[]> {
    const url = `${environment.apiServerBaseUrl}/houses/invites`;

    return this.httpClient.get<HouseInviteSimpleInfo[]>(url)
      .pipe(
        map((houseInvites: HouseInviteSimpleInfo[]) => {
          houseInvites = houseInvites.map((houseInvite: HouseInviteSimpleInfo) => {
            houseInvite.createdAt = new Date(houseInvite.createdAt);
            return houseInvite;
          });

          houseInvites = houseInvites.sort((a, b) => this.compareHouseInvites(a, b));

          return houseInvites;
        })
      );
  }

  public createHouseInvite(houseInviteCreationRequest: HouseInviteCreationRequest): Observable<HouseInviteSimpleInfo> {
    const url = `${environment.apiServerBaseUrl}/houses/invites`;

    return this.httpClient.post<HouseInviteSimpleInfo>(url, houseInviteCreationRequest);
  }

  public acceptHouseInvite(houseInviteId: string): Observable<any> {
    const url = `${environment.apiServerBaseUrl}/houses/invites/${houseInviteId}`;

    return this.httpClient.post(url, null);
  }

  public declineHouseInvite(houseInviteId: string): Observable<any> {
    const url = `${environment.apiServerBaseUrl}/houses/invites/${houseInviteId}`;

    return this.httpClient.delete(url);
  }

  private compareHouseInvites(a: HouseInviteSimpleInfo, b: HouseInviteSimpleInfo): number {
    const dateComparison = a.createdAt.getTime() - b.createdAt.getTime();
    return dateComparison;
  }
}
