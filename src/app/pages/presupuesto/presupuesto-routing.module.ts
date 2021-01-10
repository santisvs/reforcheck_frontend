import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresupuestoPage } from './presupuesto.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/presupuesto/propietario',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PresupuestoPage,
    children:[
      {
        path: 'propietario',
        loadChildren: () => import('./propietario/propietario.module').then( m => m.PropietarioPageModule)
      },
      {
        path: 'inmueble',
        loadChildren: () => import('./inmueble/inmueble.module').then( m => m.InmueblePageModule)
      },
      {
        path: 'plantas',
        loadChildren: () => import('./plantas/plantas.module').then( m => m.PlantasPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresupuestoPageRoutingModule {}
