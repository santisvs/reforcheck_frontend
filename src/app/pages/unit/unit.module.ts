import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitPageRoutingModule } from './unit-routing.module';
import { UnitListComponent } from '../../components/unit-list/unit-list.component';
import { UnitListAllComponent } from '../../components/unit-list-all/unit-list-all.component';

import { UnitPage } from './unit.page';

@NgModule({
  declarations: [
    UnitPage,
    UnitListComponent,
    UnitListAllComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitPageRoutingModule
  ],
  exports:[
  ]
})
export class UnitPageModule {}
