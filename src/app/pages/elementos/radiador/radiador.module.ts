import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiadorPageRoutingModule } from './radiador-routing.module';

import { RadiadorPage } from './radiador.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiadorPageRoutingModule,
    ElementosModule
  ],
  declarations: [RadiadorPage]
})
export class RadiadorPageModule {}
