import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstalacionPage } from './instalacion.page';

const routes: Routes = [
  {
    path: '',
    component: InstalacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstalacionPageRoutingModule {}
