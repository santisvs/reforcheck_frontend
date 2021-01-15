import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../models/propiedad';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit  {

  public propiedades: Array<Propiedad>;
  public title: string;
  

  constructor(
    private presupuestoService: PresupuestoService
  ) {
    this.title = "Datos de la propiedad";
    this.propiedades = this.presupuestoService.getAllPropiedades();
  }

  ngOnInit() {
    console.log("Registrar una propiedad");
  }

  addPropiedad(){
    this.propiedades = this.presupuestoService.addPropiedad();
    console.log(this.propiedades);
  }
  

}
