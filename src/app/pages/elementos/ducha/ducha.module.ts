import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuchaPageRoutingModule } from './ducha-routing.module';

import { DuchaPage } from './ducha.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuchaPageRoutingModule,
    ElementosModule
  ],
  declarations: [DuchaPage]
})
export class DuchaPageModule {}
