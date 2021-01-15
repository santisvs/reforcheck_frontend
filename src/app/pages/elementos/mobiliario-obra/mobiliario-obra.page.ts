import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobiliarioObra } from 'src/app/models/estancia/mobiliario-obra';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-mobiliario-obra',
  templateUrl: './mobiliario-obra.page.html',
  styleUrls: ['./mobiliario-obra.page.scss'],
})
export class MobiliarioObraPage implements OnInit {

  
  public mobiliario_obra: MobiliarioObra;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.mobiliario_obra = new MobiliarioObra();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });
    this.mobiliario_obra = <MobiliarioObra>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, "", "mobiliario_obra");
  }

  

}
