import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechoPageRoutingModule } from './techo-routing.module';

import { TechoPage } from './techo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechoPageRoutingModule
  ],
  declarations: [TechoPage]
})
export class TechoPageModule {}
