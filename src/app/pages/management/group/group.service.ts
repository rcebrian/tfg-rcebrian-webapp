import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient: HttpClient) { }


  getCompaniesTree(groupId: number): Observable<any>{
    const url = environment.groups.getTreeGroup
      .replace(':groupId', String(groupId));
    return this.httpClient.get<any>(url);
  }
}
