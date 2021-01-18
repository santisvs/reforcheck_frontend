import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaneraPageRoutingModule } from './banera-routing.module';

import { BaneraPage } from './banera.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaneraPageRoutingModule,
    ElementosModule
  ],
  declarations: [BaneraPage]
})
export class BaneraPageModule {}
