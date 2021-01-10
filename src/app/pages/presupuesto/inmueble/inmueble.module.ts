import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmueblePageRoutingModule } from './inmueble-routing.module';

import { InmueblePage } from './inmueble.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmueblePageRoutingModule,
    SharedModule
  ],
  declarations: [InmueblePage]
})
export class InmueblePageModule {}
