import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstanciaPage } from './estancia.page';

const routes: Routes = [
  {
    path: '',
    component: EstanciaPage
  },
  {
    path: 'ventana/:id4',
    loadChildren: () => import('../../elementos/ventana/ventana.module').then( m => m.VentanaPageModule)
  }
  ,
  {
    path: 'puerta/:id4',
    loadChildren: () => import('../../elementos/puerta/puerta.module').then( m => m.PuertaPageModule)
  }
  ,
  {
    path: 'armario/:id4',
    loadChildren: () => import('../../elementos/armario/armario.module').then( m => m.ArmarioPageModule)
  }
  ,
  {
    path: 'radiador/:id4',
    loadChildren: () => import('../../elementos/radiador/radiador.module').then( m => m.RadiadorPageModule)
  }
  ,
  {
    path: 'climatizacion/:id4',
    loadChildren: () => import('../../elementos/climatizacion/climatizacion.module').then( m => m.ClimatizacionPageModule)
  }
  ,
  {
    path: 'mobiliario-obra',
    loadChildren: () => import('../../elementos/mobiliario-obra/mobiliario-obra.module').then( m => m.MobiliarioObraPageModule)
  }
  ,
  {
    path: 'techo',
    loadChildren: () => import('../../elementos/techo/techo.module').then( m => m.TechoPageModule)
  }
  ,
  {
    path: 'revestimiento',
    loadChildren: () => import('../../elementos/revestimiento/revestimiento.module').then( m => m.RevestimientoPageModule)
  }
  ,
  {
    path: 'solado',
    loadChildren: () => import('../../elementos/solado/solado.module').then( m => m.SoladoPageModule)
  }
  ,
  {
    path: 'rodapie',
    loadChildren: () => import('../../elementos/rodapie/rodapie.module').then( m => m.RodapiePageModule)
  }
  ,
  {
    path: 'pintura',
    loadChildren: () => import('../../elementos/pintura/pintura.module').then( m => m.PinturaPageModule)
  }
  ,
  {
    path: 'instalacion',
    loadChildren: () => import('../../elementos/instalacion/instalacion.module').then( m => m.InstalacionPageModule)
  }
  ,
  {
    path: 'iluminacion',
    loadChildren: () => import('../../elementos/iluminacion/iluminacion.module').then( m => m.IluminacionPageModule)
  }
  ,
  {
    path: 'banera/:id4',
    loadChildren: () => import('../../elementos/banera/banera.module').then( m => m.BaneraPageModule)
  }
  ,
  {
    path: 'ducha/:id4',
    loadChildren: () => import('../../elementos/ducha/ducha.module').then( m => m.DuchaPageModule)
  }
  ,
  {
    path: 'lavabo/:id4',
    loadChildren: () => import('../../elementos/lavabo/lavabo.module').then( m => m.LavaboPageModule)
  }
  ,
  {
    path: 'inodoro/:id4',
    loadChildren: () => import('../../elementos/inodoro/inodoro.module').then( m => m.InodoroPageModule)
  }
  ,
  {
    path: 'bidet/:id4',
    loadChildren: () => import('../../elementos/bidet/bidet.module').then( m => m.BidetPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstanciaPageRoutingModule {}
