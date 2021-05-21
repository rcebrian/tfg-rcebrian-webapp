import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { RolesGuard } from '../../@core/guards/roles.guard';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    canActivate: [RolesGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_MONITOR'] },
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

