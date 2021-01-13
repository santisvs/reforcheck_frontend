import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavaboPage } from './lavabo.page';

const routes: Routes = [
  {
    path: '',
    component: LavaboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LavaboPageRoutingModule {}
