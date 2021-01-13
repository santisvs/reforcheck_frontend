import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuertaPageRoutingModule } from './puerta-routing.module';

import { PuertaPage } from './puerta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuertaPageRoutingModule
  ],
  declarations: [PuertaPage]
})
export class PuertaPageModule {}
