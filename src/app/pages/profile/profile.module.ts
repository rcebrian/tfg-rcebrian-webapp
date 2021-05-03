/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule as ngFormsModule, FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from "./profile-routing.module";

import { ProfileComponent } from "./profile/profile.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule, NbDatepickerModule, NbIconModule,
  NbInputModule, NbRadioModule, NbSelectModule,
  NbUserModule
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
  ],
})
export class ProfileModule {
}
