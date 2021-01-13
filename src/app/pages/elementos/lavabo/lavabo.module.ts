import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LavaboPageRoutingModule } from './lavabo-routing.module';

import { LavaboPage } from './lavabo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavaboPageRoutingModule
  ],
  declarations: [LavaboPage]
})
export class LavaboPageModule {}
