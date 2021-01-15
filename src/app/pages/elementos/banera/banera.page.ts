import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Banera } from 'src/app/models/estancia/banera';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-banera',
  templateUrl: './banera.page.html',
  styleUrls: ['./banera.page.scss'],
})
export class BaneraPage implements OnInit {

  public banera: Banera;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;
  public idElemento: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.banera = new Banera();
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
      this.idElemento = params.get('id4');
    });
    this.banera = <Banera>this.presupuestoService.getElementoById(this.idPropiedad, this.idPlanta, this.idEstancia, this.idElemento, "banera");
  }
}
