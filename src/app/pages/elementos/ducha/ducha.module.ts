import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuchaPageRoutingModule } from './ducha-routing.module';

import { DuchaPage } from './ducha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuchaPageRoutingModule
  ],
  declarations: [DuchaPage]
})
export class DuchaPageModule {}
