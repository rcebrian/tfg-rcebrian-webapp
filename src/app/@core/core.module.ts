import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthJWTToken, NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  LayoutService,
  PlayerService,
  StateService,
} from './utils';
import { UserData } from './data/users';
import { SmartTableData } from './data/smart-table';
import { UserActivityData } from './data/user-activity';


import { UserService } from './mock/users.service';
import { SmartTableService } from './mock/smart-table.service';
import { UserActivityService } from './mock/user-activity.service';
import { MockDataModule } from './mock/mock-data.module';

import { nbAuthConfig } from './config/auth.config';
import { environment } from '../../environments/environment';

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: UserActivityData, useClass: UserActivityService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
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
            success: '/pages/profile',
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

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
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
