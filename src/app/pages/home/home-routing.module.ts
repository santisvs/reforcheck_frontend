import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: 
    HomePage
  },
  {
    path: 'propiedad/:id1',
    loadChildren: () => import('../presupuesto/propiedad/propiedad.module').then( m => m.PropiedadPageModule)
  },   {
    path: 'crear',
    loadChildren: () => import('../elementos/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('../elementos/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
