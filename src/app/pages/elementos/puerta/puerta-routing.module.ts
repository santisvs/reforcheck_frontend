import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuertaPage } from './puerta.page';

const routes: Routes = [
  {
    path: '',
    component: PuertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuertaPageRoutingModule {}
