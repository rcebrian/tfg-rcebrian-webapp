import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { CompanyDto } from "../../../../@core/models/dto/company-dto";

interface CompanyResponseDto {
  data: Array<CompanyDto>;
}

interface GroupForm {

}

@Injectable({
  providedIn: 'root'
})
export class CreateGroupService {

  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<CompanyResponseDto> {
    const url = environment.companies.getAllCompanies;
    return this.httpClient.get<CompanyResponseDto>(url);
  }

  postNewGroup(newGroup: GroupForm): Observable<any> {
    const url = environment.companies.postNewCompany;
    return this.httpClient.post(url, newGroup);
  }
}

