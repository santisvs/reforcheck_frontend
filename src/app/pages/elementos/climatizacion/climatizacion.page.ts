import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Climatizacion } from 'src/app/models/estancia/climatizacion';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-climatizacion',
  templateUrl: './climatizacion.page.html',
  styleUrls: ['./climatizacion.page.scss'],
})
export class ClimatizacionPage implements OnInit {
  
  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: number;

  public climatizacion: Climatizacion;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.climatizacion = new Climatizacion();
   }

  ngOnInit() {
    this.climatizacion = <Climatizacion>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "climatizacion", this.s_id);
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }
}
