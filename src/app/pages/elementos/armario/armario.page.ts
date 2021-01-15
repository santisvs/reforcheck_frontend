import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Armario } from 'src/app/models/estancia/armario';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-armario',
  templateUrl: './armario.page.html',
  styleUrls: ['./armario.page.scss'],
})
export class ArmarioPage implements OnInit {

  public armario: Armario;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.armario = new Armario();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.armario = <Armario>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "armario");
  }

}
