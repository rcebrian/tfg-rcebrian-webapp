import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private httpClient: HttpClient) { }

  getCompaniesTree(): Observable<any>{
    const url = `${environment.companies.getTreeAllCompanies}`;
    return this.httpClient.get<any>(url);
  }
}
