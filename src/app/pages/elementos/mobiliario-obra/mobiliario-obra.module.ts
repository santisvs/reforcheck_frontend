import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobiliarioObraPageRoutingModule } from './mobiliario-obra-routing.module';

import { MobiliarioObraPage } from './mobiliario-obra.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobiliarioObraPageRoutingModule,
    ElementosModule
  ],
  declarations: [MobiliarioObraPage]
})
export class MobiliarioObraPageModule {}
