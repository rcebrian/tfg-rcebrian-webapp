import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbSecurityModule } from '@nebular/security';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  LayoutService,
  PlayerService,
  StateService,
} from './utils';


import { nbAuthConfig } from './config/auth.config';
import { environment } from '../../environments/environment';

export const NB_CORE_PROVIDERS = [
  ...NbAuthModule.forRoot({

    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        baseEndpoint: environment.authBase,
        token: {
          class: NbAuthJWTToken,
          key: 'data.accessToken',
        },
        login: {
          endpoint: environment.auth.signIn,
          method: 'post',
          requireValidToken: true,
          redirect: {
            success: '/auth',
            failure: null,
          },
          defaultMessages: ['You have been successfully logged in.'],
        },
        logout: {
          endpoint: environment.auth.signOut,
          method: 'post',
          redirect: {
            success: '/auth/login',
            failure: 'pages/logout',
          },
        },
      }),
    ],
    forms: nbAuthConfig.forms,
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,
  LayoutService,
  PlayerService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
