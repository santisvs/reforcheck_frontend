import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantasPageRoutingModule } from './plantas-routing.module';

import { PlantasPage } from './plantas.page';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { VentanaPageModule } from '../../elementos/ventana/ventana.module';
import { PuertaPageModule } from '../../elementos/puerta/puerta.module';
import { ArmarioPageModule } from '../../elementos/armario/armario.module';
import { RadiadorPageModule } from '../../elementos/radiador/radiador.module';
import { ClimatizacionPageModule } from '../../elementos/climatizacion/climatizacion.module';
import { MobiliarioObraPageModule } from '../../elementos/mobiliario-obra/mobiliario-obra.module';
import { BaneraPageModule } from '../../elementos/banera/banera.module';
import { BidetPageModule } from '../../elementos/bidet/bidet.module';
import { DuchaPageModule } from '../../elementos/ducha/ducha.module';
import { InodoroPageModule } from '../../elementos/inodoro/inodoro.module';
import { LavaboPageModule } from '../../elementos/lavabo/lavabo.module';
import { TechoPageModule } from '../../elementos/techo/techo.module';
import { RevestimientoPageModule } from '../../elementos/revestimiento/revestimiento.module';
import { SoladoPageModule } from '../../elementos/solado/solado.module';
import { IluminacionPageModule } from '../../elementos/iluminacion/iluminacion.module';
import { InstalacionPageModule } from '../../elementos/instalacion/instalacion.module';
import { PinturaPageModule } from '../../elementos/pintura/pintura.module';
import { RodapiePageModule } from '../../elementos/rodapie/rodapie.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PlantasPageRoutingModule,
    SharedModule,
    //Modulos elementos
    ArmarioPageModule,
    BaneraPageModule,
    BidetPageModule,
    ClimatizacionPageModule,
    DuchaPageModule,
    IluminacionPageModule,
    InodoroPageModule,
    InstalacionPageModule,
    LavaboPageModule,
    MobiliarioObraPageModule,
    PinturaPageModule,
    PuertaPageModule,
    RadiadorPageModule,
    RevestimientoPageModule,
    RodapiePageModule,
    SoladoPageModule,
    TechoPageModule,
    VentanaPageModule
  ],
  declarations: [PlantasPage]
})
export class PlantasPageModule {}
