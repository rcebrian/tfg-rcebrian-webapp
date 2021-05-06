import { Component } from '@angular/core';

import { NbAuthService } from "@nebular/auth";
import { ADMIN_MENU_ITEMS } from "../@core/menus/admin-menu";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout [isNotUser]="isNotUser">
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  private role: string;
  isNotUser: boolean;
  menu: NbMenuItem[];

  constructor(private authService: NbAuthService) {
    this.authService.getToken().subscribe(token => {
      this.role = token.getPayload()['role']
      this.isNotUser = this.role !== 'ROLE_USER'
      if (this.role === 'ROLE_ADMIN') {
        this.menu = ADMIN_MENU_ITEMS;
      } else if (this.role === 'ROLE_MONITOR') {
        this.menu = [];
      } else {
        this.menu = [];
      }
    })
  }

}
