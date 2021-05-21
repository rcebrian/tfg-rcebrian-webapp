import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-redirect',
  template: '',
})
export class RedirectComponent implements OnInit {

  constructor(private authService: NbAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getToken().subscribe(token => {
      const userInfo = token.getPayload();
        switch (userInfo.role) {
          case 'ROLE_MONITOR':
            this.router.navigate(['/pages/groups']).then(ignored => {});
            break;
          case 'ROLE_USER':
            this.router.navigate([`/pages/users/${userInfo.id}`]).then(ignored => {});
            break;
          case 'ROLE_ADMIN':
            this.router.navigate(['/pages/management/company']).then(ignored => {});
            break;
          default:
            this.router.navigate(['/pages/profile']).then(ignored => {});
            break;
        }
    });
  }

}
