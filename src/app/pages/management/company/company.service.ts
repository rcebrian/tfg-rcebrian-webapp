import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Company } from "../../../@core/models/company";

interface ResponseDto {
  data: Array<Company>;
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
}
