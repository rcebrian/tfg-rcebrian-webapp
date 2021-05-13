/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NbLoginComponent,
  NbLogoutComponent,
} from '@nebular/auth';
import { AuthGuard } from '../../@core/guards/auth.guard';
import { RedirectComponent } from './redirect.component';

export const routes: Routes = [
  {
    path: '',
    component: RedirectComponent,
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
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
