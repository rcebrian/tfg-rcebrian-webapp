import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { CompanyDto } from "../../../@core/models/dto/company-dto";
import { CompanyForm } from "../../../@core/models/form/company-form";

interface ResponseDto {
  data: Array<CompanyDto>;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  // https://stackoverflow.com/questions/46700055/angular-httpclient-map-get-method-object-result-to-array-property
  getAllCompanies(): Observable<ResponseDto> {
    const url = `${environment.companies.getAllCompanies}`;
    return this.httpClient.get<ResponseDto>(url);
  }

  postNewCompany(newCompany: CompanyForm): Observable<any> {
    const url = `${environment.companies.postNewCompany}`;
    return this.httpClient.post(url, newCompany);
  }

  putCompany(companyId: number, newCompany: CompanyForm): Observable<any> {
    const url = `${environment.companies.putCompany.replace(':id', String(companyId))}`;
    return this.httpClient.put(url, newCompany);
  }

  deleteCompany(companyId: number): Observable<any> {
    const url = `${environment.companies.deleteCompany.replace(':id', String(companyId))}`;
    return this.httpClient.delete(url);
  }
}
