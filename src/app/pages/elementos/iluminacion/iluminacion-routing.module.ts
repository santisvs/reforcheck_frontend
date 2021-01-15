import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IluminacionPage } from './iluminacion.page';

const routes: Routes = [
  {
    path: '',
    component: IluminacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IluminacionPageRoutingModule {}
