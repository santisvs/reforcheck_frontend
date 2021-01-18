import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstalacionPageRoutingModule } from './instalacion-routing.module';

import { InstalacionPage } from './instalacion.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstalacionPageRoutingModule,
    ElementosModule
  ],
  declarations: [InstalacionPage]
})
export class InstalacionPageModule {}
