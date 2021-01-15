import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bidet } from 'src/app/models/estancia/bidet';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-bidet',
  templateUrl: './bidet.page.html',
  styleUrls: ['./bidet.page.scss'],
})
export class BidetPage implements OnInit {

  public bidet: Bidet;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.bidet = new Bidet();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.bidet = <Bidet>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "bidet");
  }

}
