import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimatizacionPageRoutingModule } from './climatizacion-routing.module';

import { ClimatizacionPage } from './climatizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimatizacionPageRoutingModule
  ],
  declarations: [ClimatizacionPage]
})
export class ClimatizacionPageModule {}
