import { NgModule } from '@angular/core';
import {
  NbAlertModule,
  NbCardModule, NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbPopoverModule,
  NbSearchModule,
  NbTreeGridModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ManagementRoutingModule, routedComponents } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { CompanyComponent } from './company/company.component';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { UsersComponent } from './users/users.component';
import { FsIconComponent } from "./groups/tree-grid/tree.component";
import { GroupsComponent } from './groups/groups.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';

@NgModule({
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ManagementRoutingModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbFormFieldModule,
  ],
  declarations: [
    ManagementComponent,
    CompanyComponent,
    UsersComponent,
    ...routedComponents,
    FsIconComponent,
    GroupsComponent,
    CreateGroupComponent,
  ],
})
export class ManagementModule { }
