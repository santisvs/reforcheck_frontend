import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pintura } from 'src/app/models/estancia/pintura';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.page.html',
  styleUrls: ['./pintura.page.scss'],
})
export class PinturaPage implements OnInit {

  public pintura: Pintura;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.pintura = new Pintura();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });
    this.pintura = <Pintura>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, "", "pintura");
  }
}
