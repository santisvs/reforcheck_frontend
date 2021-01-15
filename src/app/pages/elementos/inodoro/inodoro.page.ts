import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inodoro } from 'src/app/models/estancia/inodoro';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-inodoro',
  templateUrl: './inodoro.page.html',
  styleUrls: ['./inodoro.page.scss'],
})
export class InodoroPage implements OnInit {

  public inodoro: Inodoro;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.inodoro = new Inodoro();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.inodoro = <Inodoro>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "inodoro");
  }

}
