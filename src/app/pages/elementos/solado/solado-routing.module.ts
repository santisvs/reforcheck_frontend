import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoladoPage } from './solado.page';

const routes: Routes = [
  {
    path: '',
    component: SoladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoladoPageRoutingModule {}
