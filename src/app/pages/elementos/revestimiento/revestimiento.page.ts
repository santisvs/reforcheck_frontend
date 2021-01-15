import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Revestimiento } from 'src/app/models/estancia/revestimiento';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-revestimiento',
  templateUrl: './revestimiento.page.html',
  styleUrls: ['./revestimiento.page.scss'],
})
export class RevestimientoPage implements OnInit {

  public revestimiento: Revestimiento;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.revestimiento = new Revestimiento();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });
    this.revestimiento = <Revestimiento>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, "", "revestimiento");
  }

}
