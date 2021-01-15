import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaneraPage } from './banera.page';

const routes: Routes = [
  {
    path: '',
    component: BaneraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaneraPageRoutingModule {}
