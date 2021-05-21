/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
} from '@nebular/auth';
import { AuthGuard } from '../../@core/guards/auth.guard';
import { RedirectComponent } from './redirect.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'logout',
        canActivate: [AuthGuard],
        component: NbLogoutComponent,
      },
      {
        path: 'redirect',
        canActivate: [AuthGuard],
        component: RedirectComponent,
      },
      { path: '**', redirectTo: 'redirect' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
