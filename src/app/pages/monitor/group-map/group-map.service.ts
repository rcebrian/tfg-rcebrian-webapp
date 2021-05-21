import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupMapService {

  constructor(private httpClient: HttpClient) { }

  getGroup(id: string): Observable<any> {
    const url = environment.groups.getTreeGroup.replace(':groupId', id);
    return this.httpClient.get(url);
  }
}
