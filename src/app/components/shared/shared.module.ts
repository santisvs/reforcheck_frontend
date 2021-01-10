import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { VariablesComponent } from './variables/variables.component';

@NgModule({
  declarations: [
    HeaderComponent,
    VariablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    VariablesComponent
  ]
})
export class SharedModule { }
