import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lavabo } from 'src/app/models/estancia/lavabo';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-lavabo',
  templateUrl: './lavabo.page.html',
  styleUrls: ['./lavabo.page.scss'],
})
export class LavaboPage implements OnInit {

  public lavabo: Lavabo;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.lavabo = new Lavabo();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.lavabo = <Lavabo>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "lavabo");
  }
}
