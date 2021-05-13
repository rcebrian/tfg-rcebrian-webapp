import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbIconModule, NbListModule,
  NbPopoverModule,
  NbSearchModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MonitorComponent } from './monitor.component';
import { MonitorRoutingModule } from './monitor-routing.module';
import { GroupMapComponent } from './group-map/group-map.component';
import { MapComponent } from './group-map/map/map.component';

@NgModule({
  imports: [
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbIconModule,
    ThemeModule,
    MonitorRoutingModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
  ],
  declarations: [
    MonitorComponent,
    GroupMapComponent,
    MapComponent,
  ],
  exports: [
    MapComponent,
  ],
})
export class MonitorModule { }
