import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobiliarioObraPageRoutingModule } from './mobiliario-obra-routing.module';

import { MobiliarioObraPage } from './mobiliario-obra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobiliarioObraPageRoutingModule
  ],
  declarations: [MobiliarioObraPage]
})
export class MobiliarioObraPageModule {}
