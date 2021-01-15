import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../../home/home.page';
import { PlantaPage } from './planta.page';

const routes: Routes = [
  {
    path: '',
    component: PlantaPage,
  },
  {
    path: 'estancia/:id3',
    loadChildren: () => import('../estancia/estancia.module').then( m => m.EstanciaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PlantaPageRoutingModule {}
