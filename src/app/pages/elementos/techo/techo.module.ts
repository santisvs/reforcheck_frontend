import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechoPageRoutingModule } from './techo-routing.module';

import { TechoPage } from './techo.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechoPageRoutingModule,
    ElementosModule
  ],
  declarations: [TechoPage]
})
export class TechoPageModule {}
