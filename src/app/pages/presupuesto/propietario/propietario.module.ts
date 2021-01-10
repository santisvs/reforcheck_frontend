import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropietarioPageRoutingModule } from './propietario-routing.module';

import { PropietarioPage } from './propietario.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropietarioPageRoutingModule,
    SharedModule
  ],
  declarations: [PropietarioPage]
})
export class PropietarioPageModule {}
