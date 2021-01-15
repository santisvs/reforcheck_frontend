import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuchaPage } from './ducha.page';

const routes: Routes = [
  {
    path: '',
    component: DuchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuchaPageRoutingModule {}
