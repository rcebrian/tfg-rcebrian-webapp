import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import { User } from "../../../../@core/models/user";
import { map } from 'rxjs/operators'

export interface ResponseDto {
  data: User;
}

@Injectable({
  providedIn: 'root'
})

export class EditInfoService {

  userId: any;

  constructor(private authService: NbAuthService ,private httpClient: HttpClient) {
    authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.userId = token.getPayload()['id'];
        }
      });
  }

  getUserInfo(): Observable<User> {
    const url = `${environment.users.getUserInfo.replace(':id', this.userId)}`
    return this.httpClient.get<ResponseDto>(url)
      .pipe(map(res => {
        return <User> {
          id: res.data.id,
          email: res.data.email,
          ...res.data
        }
      }));
  }
}
