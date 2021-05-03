import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management.component';
import { IconsComponent } from './icons/icons.component';
import { CompanyComponent } from "./company/company.component";
import { RolesGuard } from "../../@core/guards/roles.guard";

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
      path: 'icons',
      component: IconsComponent,
    }
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }
