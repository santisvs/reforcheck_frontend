import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidetPageRoutingModule } from './bidet-routing.module';

import { BidetPage } from './bidet.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidetPageRoutingModule,
    ElementosModule
  ],
  declarations: [BidetPage]
})
export class BidetPageModule {}
