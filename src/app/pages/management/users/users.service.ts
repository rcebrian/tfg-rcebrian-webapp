import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { CompanyDto } from "../../../@core/models/dto/company-dto";

interface UserNode {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  country: string;
  postalCode: string;
  UsersGroups?: {
    userId: number;
    groupId: number;
  },
  role: {
    name: string;
  }
}

interface GroupNode {
  id: number;
  name: string;
  description: string;
  users?: Array<UserNode>;
}

interface CompanyNode {
  id: number;
  name: string;
  description: string,
  groups?: Array<GroupNode>;
}

interface ResponseTreeAllCompaniesDto {
  data: Array<CompanyNode>;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getTreeAllCompanies(): Observable<ResponseTreeAllCompaniesDto> {
    const url = `${environment.companies.getTreeAllCompanies}`;
    return this.httpClient.get<ResponseTreeAllCompaniesDto>(url);
  }

}
