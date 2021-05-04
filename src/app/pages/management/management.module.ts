import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { CompanyComponent } from './company/company.component';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    ManagementRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ManagementComponent,
    CompanyComponent,
    UsersComponent,
  ],
})
export class ManagementModule { }
