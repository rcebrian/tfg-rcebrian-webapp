import { NgModule } from '@angular/core';
import {
  NbCardModule, NbListModule,
  NbPopoverModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MonitorModule } from '../monitor/monitor.module';

@NgModule({
  imports: [
    NbPopoverModule,
    ThemeModule,
    UserRoutingModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    MonitorModule,
  ],
  declarations: [
    UserProfileComponent,
  ],
})
export class UserModule { }
