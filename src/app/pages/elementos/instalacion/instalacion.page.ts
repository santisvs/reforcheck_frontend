import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instalacion } from 'src/app/models/estancia/instalacion';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-instalacion',
  templateUrl: './instalacion.page.html',
  styleUrls: ['./instalacion.page.scss'],
})
export class InstalacionPage implements OnInit {
  
  public instalacion: Instalacion;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.instalacion = new Instalacion();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });
    this.instalacion = <Instalacion>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, "", "instalacion");
  }
}
