import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinturaPageRoutingModule } from './pintura-routing.module';

import { PinturaPage } from './pintura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinturaPageRoutingModule
  ],
  declarations: [PinturaPage]
})
export class PinturaPageModule {}
