import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CompanyDto } from '../../../@core/models/dto/company-dto';

interface CompanyResponseDto {
  data: Array<CompanyDto>;
}

interface GroupForm {
  name: string;
  description: string;
  companyId: number;
}

@Injectable({
  providedIn: 'root',
})
export class GroupsService {

  constructor(private httpClient: HttpClient) { }

  getCompaniesTree(): Observable<any> {
    const url = `${environment.companies.getTreeAllCompanies}`;
    return this.httpClient.get<any>(url);
  }

  getAllCompanies(): Observable<CompanyResponseDto> {
    const url = environment.companies.getAllCompanies;
    return this.httpClient.get<CompanyResponseDto>(url);
  }

  postNewGroup(newGroup: GroupForm): Observable<any> {
    const url = environment.groups.postNewGroup.replace(':companyId', String(newGroup.companyId));
    return this.httpClient.post(url, newGroup);
  }
}
