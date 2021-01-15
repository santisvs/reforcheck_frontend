import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstanciaPageRoutingModule } from './estancia-routing.module';

import { EstanciaPage } from './estancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstanciaPageRoutingModule
  ],
  declarations: [EstanciaPage]
})
export class EstanciaPageModule {}
