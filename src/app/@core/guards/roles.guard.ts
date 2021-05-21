import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { map } from 'rxjs/operators/map';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authorizedRoles = route.data.roles as Array<string>;
    return this.authService.getToken()
      .pipe(
        map((token: NbAuthJWTToken) => {
            const role = token.getPayload()['role'];
            if (authorizedRoles.indexOf(role) > -1) {
              return true;
            } else {
              this.router.navigate(['pages/profile']);
              return false;
            }
        }),
      );
  }
}
