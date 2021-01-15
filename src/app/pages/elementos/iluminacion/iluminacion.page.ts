import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iluminacion } from 'src/app/models/estancia/iluminacion';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-iluminacion',
  templateUrl: './iluminacion.page.html',
  styleUrls: ['./iluminacion.page.scss'],
})
export class IluminacionPage implements OnInit {

  public iluminacion: Iluminacion;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.iluminacion = new Iluminacion();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });
    this.iluminacion = <Iluminacion>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, "", "iluminacion");
  }

}
