import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IluminacionPageRoutingModule } from './iluminacion-routing.module';

import { IluminacionPage } from './iluminacion.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IluminacionPageRoutingModule,
    ElementosModule
  ],
  declarations: [IluminacionPage]
})
export class IluminacionPageModule {}
