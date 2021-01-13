import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidetPage } from './bidet.page';

const routes: Routes = [
  {
    path: '',
    component: BidetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidetPageRoutingModule {}
