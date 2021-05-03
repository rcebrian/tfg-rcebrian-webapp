import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import { User } from "../../../../@core/models/user";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EditInfoService {

  userId: any;

  constructor(private authService: NbAuthService ,private httpClient: HttpClient) {
    authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.userId = token.getPayload()['id']; // here we receive a payload from the token and assigns it to our `user` variable
        }
      });
  }

  getUserInfo(): Observable<User> {
    const url = `${environment.users.getUserInfo.replace(':id', this.userId)}`
    return this.httpClient.get<User>(url);
  }
  // getLocation(locationId: string): Observable<LocationDTO> {
  //   return this.httpClient.get<Location>(`${this._BASE_URI}/${locationId}`)
  //     .pipe(map(location => {
  //       let loc = location;
  //       return <LocationDTO> {
  //         name: loc.name,
  //         id: loc.id,
  //         type: loc.type,
  //         dimension: loc.dimension,
  //         residents: location.residents.length
  //       }
  //     }));
  // }
}
