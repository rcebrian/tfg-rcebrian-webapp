import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { PasswordForm } from '../../../../@core/models/form/password-form';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {

  constructor(private httpClient: HttpClient) { }

  changePassword(passwordForm: PasswordForm): Observable<any> {
    const url = environment.auth.changePass;
    return this.httpClient.put(url, passwordForm);
  }
}
