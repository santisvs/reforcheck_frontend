import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoladoPageRoutingModule } from './solado-routing.module';

import { SoladoPage } from './solado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoladoPageRoutingModule
  ],
  declarations: [SoladoPage]
})
export class SoladoPageModule {}
