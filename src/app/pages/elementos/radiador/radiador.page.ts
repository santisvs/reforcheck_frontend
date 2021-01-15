import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Radiador } from 'src/app/models/estancia/radiador';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-radiador',
  templateUrl: './radiador.page.html',
  styleUrls: ['./radiador.page.scss'],
})
export class RadiadorPage implements OnInit {

  public radiador: Radiador;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.radiador = new Radiador();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.radiador = <Radiador>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "radiador");
  }

}
