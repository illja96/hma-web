import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/models/user/user-info.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public registerUser(): Observable<UserInfo> {
    const url = `${environment.apiServerBaseUrl}/users/register`;

    return this.httpClient.post<UserInfo>(url, null);
  }

  public getCurrentUserProfile(): Observable<UserInfo> {
    const url = `${environment.apiServerBaseUrl}/users/me`;

    return this.httpClient.get<UserInfo>(url);
  }

  public updateCurrentUserProfile(): Observable<UserInfo> {
    const url = `${environment.apiServerBaseUrl}/users/me`;

    return this.httpClient.patch<UserInfo>(url, null);
  }

  public deleteUserProfile(): Observable<any> {
    const url = `${environment.apiServerBaseUrl}/users/me`;

    return this.httpClient.delete<UserInfo>(url);
  }
}
