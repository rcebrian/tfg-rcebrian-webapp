import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProfileModule } from './profile/profile.module';
import { ManagementModule } from './management/management.module';
import { MonitorModule } from './monitor/monitor.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    ProfileModule,
    ManagementModule,
    MonitorModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
