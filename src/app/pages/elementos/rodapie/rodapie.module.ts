import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RodapiePageRoutingModule } from './rodapie-routing.module';

import { RodapiePage } from './rodapie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RodapiePageRoutingModule
  ],
  declarations: [RodapiePage]
})
export class RodapiePageModule {}
