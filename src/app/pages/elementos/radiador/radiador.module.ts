import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiadorPageRoutingModule } from './radiador-routing.module';

import { RadiadorPage } from './radiador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiadorPageRoutingModule
  ],
  declarations: [RadiadorPage]
})
export class RadiadorPageModule {}
