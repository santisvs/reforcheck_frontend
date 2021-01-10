import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantasPageRoutingModule } from './plantas-routing.module';

import { PlantasPage } from './plantas.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantasPageRoutingModule,
    SharedModule
  ],
  declarations: [PlantasPage]
})
export class PlantasPageModule {}
