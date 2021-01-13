import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimatizacionPage } from './climatizacion.page';

const routes: Routes = [
  {
    path: '',
    component: ClimatizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimatizacionPageRoutingModule {}
