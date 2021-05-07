import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CompanyForm } from '../../../@core/models/form/company-form';
import { User } from '../../../@core/models/user';

interface ResponseUsersDto {
  data: Array<User>;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<ResponseUsersDto> {
    const url = `${environment.users.getAllUsers}`;
    return this.httpClient.get<ResponseUsersDto>(url);
  }

  postNewCompany(newCompany: CompanyForm): Observable<any> {
    const url = `${environment.companies.postNewCompany}`;
    return this.httpClient.post(url, newCompany);
  }

  putCompany(userId: number, newUser: any): Observable<any> {
    const url = `${environment.users.putUserInfo.replace(':userId', String(userId))}`;
    return this.httpClient.put(url, newUser);
  }

  deleteCompany(userId: number): Observable<any> {
    const url = `${environment.users.deleteUserInfo.replace(':userId', String(userId))}`;
    return this.httpClient.delete(url);
  }
}
