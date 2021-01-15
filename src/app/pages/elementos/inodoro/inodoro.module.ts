import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InodoroPageRoutingModule } from './inodoro-routing.module';

import { InodoroPage } from './inodoro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InodoroPageRoutingModule
  ],
  declarations: [InodoroPage]
})
export class InodoroPageModule {}
