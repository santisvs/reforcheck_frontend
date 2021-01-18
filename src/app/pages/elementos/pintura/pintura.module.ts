import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinturaPageRoutingModule } from './pintura-routing.module';

import { PinturaPage } from './pintura.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinturaPageRoutingModule,
    ElementosModule
  ],
  declarations: [PinturaPage]
})
export class PinturaPageModule {}
