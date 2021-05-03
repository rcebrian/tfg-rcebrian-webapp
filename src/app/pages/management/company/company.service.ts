import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { map } from "rxjs/operators";
import { Company } from "../../../@core/models/company";

interface ResponseDto {
  data: Company;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  bearer: any;

  constructor(private authService: NbAuthService ,private httpClient: HttpClient) {
    authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
          this.bearer = token.getPayload();
      });
  }

  getAllCompanies(): Observable<Company> {
    const url = `${environment.companies.getAllCompanies}`
    return this.httpClient.get<ResponseDto>(url)
      .pipe(map(res => {
        return <Company> {
          id: res.data.id,
          ...res.data
        }
      }));
  }
}
