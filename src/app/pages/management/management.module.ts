import { NgModule } from '@angular/core';
import {
  NbAlertModule, NbButtonModule,
  NbCardModule, NbCheckboxModule, NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbPopoverModule,
  NbSearchModule, NbSelectModule,
  NbTreeGridModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { CompanyComponent } from './company/company.component';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FsIconComponent } from "./groups/groups.component";
import { ReactiveFormsModule } from "@angular/forms";
import { GroupsComponent } from "./groups/groups.component";
import { GroupComponent, UserIconComponent } from './group/group.component';

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
    NbCheckboxModule,
    NbButtonModule,
    NbSelectModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ManagementComponent,
    CompanyComponent,
    FsIconComponent,
    UserIconComponent,
    GroupsComponent,
    GroupComponent,
  ],
})
export class ManagementModule { }
