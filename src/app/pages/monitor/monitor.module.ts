import { NgModule } from '@angular/core';
import {
  NbIconModule,
  NbPopoverModule,
  NbSearchModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MonitorComponent } from "./monitor.component";
import { MonitorRoutingModule } from "./monitor-routing.module";
import { GroupMapComponent } from './group-map/group-map.component';

@NgModule({
  imports: [
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbIconModule,
    ThemeModule,
    MonitorRoutingModule,
  ],
  declarations: [
    MonitorComponent,
    GroupMapComponent,
  ],
})
export class MonitorModule { }
