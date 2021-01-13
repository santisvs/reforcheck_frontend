import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { VariablesComponent } from './variables/variables.component';
import { SelectElementosComponent } from './select-elementos/select-elementos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    VariablesComponent,
    SelectElementosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    VariablesComponent,
    SelectElementosComponent
  ]
})
export class SharedModule { }
