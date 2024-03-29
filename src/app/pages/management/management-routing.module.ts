import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management.component';
import { CompanyComponent } from './company/company.component';
import { RolesGuard } from '../../@core/guards/roles.guard';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './groups/group/group.component';
import { UsersComponent } from './users/users.component';

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
      path: 'groups',
      component: GroupsComponent,
    },
    {
      path: 'groups/:groupId',
      component: GroupComponent,
    },
    {
      path: 'users',
      component: UsersComponent,
    },
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }
