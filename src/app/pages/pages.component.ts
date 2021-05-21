import { Component } from '@angular/core';

import { NbAuthService } from '@nebular/auth';
import { ADMIN_MENU_ITEMS } from '../@core/menus/admin-menu';
import { NbMenuItem } from '@nebular/theme';
import { MenuGeneratorService } from '../@core/services/menu-generator.service';

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
  menu: NbMenuItem[] = [];

  constructor( private menuGeneratorService: MenuGeneratorService, private authService: NbAuthService) {
    menuGeneratorService.menuFromRole();
    this.authService.getToken().subscribe(token => {
      this.role = token.getPayload()['role'];
      this.isNotUser = this.role !== 'ROLE_USER';
      if (this.role === 'ROLE_ADMIN') {
        this.menu = ADMIN_MENU_ITEMS;
      } else if (this.role === 'ROLE_MONITOR') {
        this.monitorMenu();
      } else {
        this.menu = [];
      }
    });
  }

  monitorMenu(): any {
    this.menuGeneratorService.menuFromRole().subscribe(res => {
      const { data } = res;
      const children = [];
      data.groups.forEach(item => {
        children.push(this.toMenu(item));
      });
      this.menu = this.generateMonitorMenu(children);
    });
  }

  toMenu(group: any): any  {
    return {
      title: group.name,
      icon: 'people-outline',
      link: `/pages/groups/${group.id}/map`,
    };
  }

  generateMonitorMenu(children: any[]): NbMenuItem[] {
    return [
      {
        title: 'My Groups',
        icon: 'briefcase-outline',
        children: children,
      },
    ];
  }



}
