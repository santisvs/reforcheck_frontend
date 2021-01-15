import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantaPageRoutingModule } from './planta-routing.module';

import { PlantaPage } from './planta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantaPageRoutingModule
  ],
  declarations: [PlantaPage]
})
export class PlantaPageModule {}
