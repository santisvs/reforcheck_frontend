import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Puerta } from 'src/app/models/estancia/puerta';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-puerta',
  templateUrl: './puerta.page.html',
  styleUrls: ['./puerta.page.scss'],
})
export class PuertaPage implements OnInit {

  public puerta: Puerta;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.puerta = new Puerta();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.puerta = <Puerta>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "puerta");
  }
}
