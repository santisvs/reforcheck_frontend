import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentanaPageRoutingModule } from './ventana-routing.module';

import { VentanaPage } from './ventana.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentanaPageRoutingModule,
    ElementosModule
  ],
  declarations: [VentanaPage]
})
export class VentanaPageModule {}
