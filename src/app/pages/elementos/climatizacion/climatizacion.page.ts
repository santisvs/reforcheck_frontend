import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Climatizacion } from 'src/app/models/estancia/climatizacion';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-climatizacion',
  templateUrl: './climatizacion.page.html',
  styleUrls: ['./climatizacion.page.scss'],
})
export class ClimatizacionPage implements OnInit {
  
  public climatizacion: Climatizacion;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.climatizacion = new Climatizacion();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.climatizacion = <Climatizacion>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "climatizacion");
  }
}
