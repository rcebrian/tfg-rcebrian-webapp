import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management.component';
import { CompanyComponent } from "./company/company.component";
import { RolesGuard } from "../../@core/guards/roles.guard";
import { UsersComponent } from "./users/users.component";
import { GroupsComponent } from "./tree-grid/groups.component";
import { TablesComponent } from "../tables/tables.component";
import { SmartTableComponent } from "../tables/smart-table/smart-table.component";

const routes: Routes = [{
  path: '',
  component: ManagementComponent,
  canActivate: [RolesGuard],
  data: { roles: ['ROLE_ADMIN'] },
  children: [
    {
      path: 'company',
      component: CompanyComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'groups',
      component: GroupsComponent,
    },
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }

export const routedComponents = [
  GroupsComponent,
];
