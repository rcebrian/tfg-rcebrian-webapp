import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { RoleDto } from '../../../../@core/models/dto/role-dto';

interface RolesResponseDto {
  data: Array<RoleDto>;
}

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  constructor(private httpClient: HttpClient) { }


  getCompaniesTree(groupId: number): Observable<any> {
    const url = environment.groups.getTreeGroup
      .replace(':groupId', String(groupId));
    return this.httpClient.get<any>(url);
  }

  createUser(newUser: any): Observable<any> {
    const url = environment.auth.signUp;
    return this.httpClient.post(url, newUser);
  }

  getRoles(): Observable<RolesResponseDto> {
    const url = environment.auth.getRoles;
    return this.httpClient.get<RolesResponseDto>(url);
  }
}
