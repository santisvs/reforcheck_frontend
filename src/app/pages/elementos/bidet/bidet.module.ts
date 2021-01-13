import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidetPageRoutingModule } from './bidet-routing.module';

import { BidetPage } from './bidet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidetPageRoutingModule
  ],
  declarations: [BidetPage]
})
export class BidetPageModule {}
