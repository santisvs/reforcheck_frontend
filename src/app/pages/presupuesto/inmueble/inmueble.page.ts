import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Propiedad } from 'src/app/models/propiedad';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.page.html',
  styleUrls: ['./inmueble.page.scss'],
})
export class InmueblePage implements OnInit {

  public propiedad: Propiedad;
  
  constructor(
    private presupuestoService: PresupuestoService
  ) { }

  ngOnInit() {
    this.propiedad = this.presupuestoService.getPropiedad();
    console.log("INMUEBLE");
    console.log(this.propiedad);
  }

  validarDatosInmueble(fDatosInmueble: NgForm){
    this.propiedad = this.presupuestoService.getPropiedad();
    console.log("Validar Datos inmueble");
    console.log(fDatosInmueble.form.value);
    this.presupuestoService.setDatosInmueble(fDatosInmueble.form.value);
    console.log(this.propiedad);
  }

}
