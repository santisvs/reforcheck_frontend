import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solado } from 'src/app/models/estancia/solado';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-solado',
  templateUrl: './solado.page.html',
  styleUrls: ['./solado.page.scss'],
})
export class SoladoPage implements OnInit {

  public solado: Solado;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.solado = new Solado();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });
    this.solado = <Solado>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, "", "solado");
  }

}
