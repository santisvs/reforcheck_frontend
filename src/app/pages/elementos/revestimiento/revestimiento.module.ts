import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevestimientoPageRoutingModule } from './revestimiento-routing.module';

import { RevestimientoPage } from './revestimiento.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevestimientoPageRoutingModule,
    ElementosModule
  ],
  declarations: [RevestimientoPage]
})
export class RevestimientoPageModule {}
