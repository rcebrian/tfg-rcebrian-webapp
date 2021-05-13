import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../@core/models/user';
import { environment } from '../../../../environments/environment';

interface UserResponse {
  data: User;
}

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {

  constructor(private httpClient: HttpClient) { }

  getUserInfo(userId: number): Observable<UserResponse> {
    const url = environment.users.getUserInfo.replace(':id', String(userId));
    return this.httpClient.get<UserResponse>(url);
  }
}
