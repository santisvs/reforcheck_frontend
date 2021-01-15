import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rodapie } from 'src/app/models/estancia/rodapie';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-rodapie',
  templateUrl: './rodapie.page.html',
  styleUrls: ['./rodapie.page.scss'],
})
export class RodapiePage implements OnInit {

  public rodapie: Rodapie;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.rodapie = new Rodapie();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });
    this.rodapie = <Rodapie>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, "", "rodapie");
  }

}
