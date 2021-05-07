import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesGuard } from "../../@core/guards/roles.guard";
import { MonitorComponent } from "./monitor.component";
import { GroupMapComponent } from "./group-map/group-map.component";

const routes: Routes = [{
  path: '',
  component: MonitorComponent,
  canActivate: [RolesGuard],
  data: { roles: ['ROLE_ADMIN', 'ROLE_MONITOR'] },
  children: [
    {
      path: ':id/map',
      component: GroupMapComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorRoutingModule { }
