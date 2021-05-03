import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { IconsComponent } from './icons/icons.component';
import { CompanyComponent } from './company/company.component';

const components = [

];

@NgModule({
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    ManagementRoutingModule,
  ],
  declarations: [
    ManagementComponent,
    CompanyComponent,
    IconsComponent,
  ],
})
export class ManagementModule { }
