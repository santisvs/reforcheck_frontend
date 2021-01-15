import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ducha } from 'src/app/models/estancia/ducha';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-ducha',
  templateUrl: './ducha.page.html',
  styleUrls: ['./ducha.page.scss'],
})
export class DuchaPage implements OnInit {

  public ducha: Ducha;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.ducha = new Ducha();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.ducha = <Ducha>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "ducha");
  }
}
