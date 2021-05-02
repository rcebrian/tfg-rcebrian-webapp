/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { nbAuthConfig } from '../../@core/config/auth.config';

import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:3001/api/auth',
          login: {
            // ...
            endpoint: '/signIn',
            method: 'post'
          },
        }),
      ],
      forms: nbAuthConfig.forms,
    }),
  ],
  declarations: [
  ],
})
export class AuthModule {
}
