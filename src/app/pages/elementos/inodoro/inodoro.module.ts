import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InodoroPageRoutingModule } from './inodoro-routing.module';

import { InodoroPage } from './inodoro.page';
import { ElementosModule } from 'src/app/components/elementos/elementos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InodoroPageRoutingModule,
    ElementosModule
  ],
  declarations: [InodoroPage]
})
export class InodoroPageModule {}
