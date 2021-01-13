import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresupuestoPageRoutingModule } from './presupuesto-routing.module';

import { PresupuestoPage } from './presupuesto.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresupuestoPageRoutingModule,
    SharedModule
  ],
  declarations: [PresupuestoPage]
})
export class PresupuestoPageModule {}
