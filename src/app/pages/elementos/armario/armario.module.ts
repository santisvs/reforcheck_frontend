import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmarioPageRoutingModule } from './armario-routing.module';

import { ArmarioPage } from './armario.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmarioPageRoutingModule,
    ElementosModule
  ],
  declarations: [ArmarioPage]
})
export class ArmarioPageModule {}
