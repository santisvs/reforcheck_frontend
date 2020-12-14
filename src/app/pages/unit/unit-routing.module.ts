import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitPage } from './unit.page';
import { UnitListComponent } from '../../components/unit-list/unit-list.component';

import { UnitListAllComponent } from '../../components/unit-list-all/unit-list-all.component';

const routes: Routes = [
  { path: 'unit', component: UnitPage ,
    children:[
      { path: '', component: UnitListComponent, pathMatch: 'full'},
      { path: 'demolicion', component: UnitListAllComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitPageRoutingModule {}
