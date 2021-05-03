/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from "./profile-routing.module";

import { ProfileComponent } from "./profile/profile.component";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
  ],
})
export class ProfileModule {
}
