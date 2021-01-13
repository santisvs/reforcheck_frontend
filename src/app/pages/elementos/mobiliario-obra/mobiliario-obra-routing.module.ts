import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobiliarioObraPage } from './mobiliario-obra.page';

const routes: Routes = [
  {
    path: '',
    component: MobiliarioObraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobiliarioObraPageRoutingModule {}
