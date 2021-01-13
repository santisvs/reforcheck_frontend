import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinturaPage } from './pintura.page';

const routes: Routes = [
  {
    path: '',
    component: PinturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinturaPageRoutingModule {}
