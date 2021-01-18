import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Medida3dComponent } from './medida3d/medida3d.component';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { ObservacionesComponent } from './observaciones/observaciones.component';
import { TramosComponent } from './tramos/tramos.component';
import { Medida2dComponent } from './medida2d/medida2d.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    FabricanteComponent,
    ObservacionesComponent,
    Medida2dComponent,
    Medida3dComponent,
    TramosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[
    CabeceraComponent,
    FabricanteComponent,
    ObservacionesComponent,
    Medida2dComponent,
    Medida3dComponent,
    TramosComponent
  ]
})
export class ElementosModule { }
