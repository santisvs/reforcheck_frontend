import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropiedadPage } from './propiedad.page';

const routes: Routes = [
  {
    path: '',
    component: PropiedadPage,
  },
  {
    path: 'planta/:id2',
    loadChildren: () => import('../planta/planta.module').then( m => m.PlantaPageModule)
  }
          
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PropiedadPageRoutingModule {}
