import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmueblePage } from './inmueble.page';

const routes: Routes = [
  {
    path: '',
    component: InmueblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmueblePageRoutingModule {}
