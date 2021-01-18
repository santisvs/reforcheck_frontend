import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuertaPageRoutingModule } from './puerta-routing.module';

import { PuertaPage } from './puerta.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuertaPageRoutingModule,
    ElementosModule
  ],
  declarations: [PuertaPage]
})
export class PuertaPageModule {}
