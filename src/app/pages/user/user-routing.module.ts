import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{
  path: '',
  data: { roles: ['ROLE_ADMIN', 'ROLE_MONITOR'] },
  children: [
    {
      path: ':id',
      component: UserProfileComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
