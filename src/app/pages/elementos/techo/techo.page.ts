import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Techo } from 'src/app/models/estancia/techo';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-techo',
  templateUrl: './techo.page.html',
  styleUrls: ['./techo.page.scss'],
})
export class TechoPage implements OnInit {

  public techo: Techo;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.techo = new Techo();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });
    this.techo = <Techo>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, "", "techo");
  }
}
