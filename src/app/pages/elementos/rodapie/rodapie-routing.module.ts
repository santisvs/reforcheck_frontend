import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RodapiePage } from './rodapie.page';

const routes: Routes = [
  {
    path: '',
    component: RodapiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RodapiePageRoutingModule {}
