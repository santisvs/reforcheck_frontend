import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
import { Propiedad } from '../../../models/propiedad';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.page.html',
  styleUrls: ['./propietario.page.scss'],
})
export class PropietarioPage implements OnInit {

  public propiedad: Propiedad;

  constructor(
    private presupuestoService: PresupuestoService
    ) { }

  ngOnInit() {
    console.log("Registrar una propiedad");
    this.presupuestoService.crearPropiedad();
    this.propiedad = this.presupuestoService.getPropiedad();
  }

  guardarPresupuesto(){
    console.log(this.presupuestoService.getPropiedad());
  }

  validarDatosPropiedad(fDatosPropiedad: NgForm){
    console.log("Validar Datos propiedad");
    console.log(fDatosPropiedad.form.value);
    this.presupuestoService.setDatosPropiedad(fDatosPropiedad.form.value);
  }

}
