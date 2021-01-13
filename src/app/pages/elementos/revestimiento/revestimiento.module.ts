import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevestimientoPageRoutingModule } from './revestimiento-routing.module';

import { RevestimientoPage } from './revestimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevestimientoPageRoutingModule
  ],
  declarations: [RevestimientoPage]
})
export class RevestimientoPageModule {}
