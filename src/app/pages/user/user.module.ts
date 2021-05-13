import { NgModule } from '@angular/core';
import {
  NbCardModule, NbListModule,
  NbPopoverModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    NbPopoverModule,
    ThemeModule,
    UserRoutingModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
  ],
  declarations: [
    UserProfileComponent,
  ],
})
export class UserModule { }
