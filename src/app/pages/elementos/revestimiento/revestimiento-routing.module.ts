import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevestimientoPage } from './revestimiento.page';

const routes: Routes = [
  {
    path: '',
    component: RevestimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevestimientoPageRoutingModule {}
