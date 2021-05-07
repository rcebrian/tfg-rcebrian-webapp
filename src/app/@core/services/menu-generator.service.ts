import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

interface UserGroupsResponseDto {
  data: User;
}

@Injectable({
  providedIn: 'root',
})
export class MenuGeneratorService {

  constructor(private httpClient: HttpClient) {
  }

  menuFromRole(): Observable<UserGroupsResponseDto> {
    return this.httpClient.get<UserGroupsResponseDto>(environment.groups.getUserGroups);
  }

}
