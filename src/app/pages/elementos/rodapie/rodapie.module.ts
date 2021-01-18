import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RodapiePageRoutingModule } from './rodapie-routing.module';

import { RodapiePage } from './rodapie.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RodapiePageRoutingModule,
    ElementosModule
  ],
  declarations: [RodapiePage]
})
export class RodapiePageModule {}
