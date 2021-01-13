import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Radiador } from 'src/app/models/estancia/radiador';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-radiador',
  templateUrl: './radiador.page.html',
  styleUrls: ['./radiador.page.scss'],
})
export class RadiadorPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: number;

  public radiador: Radiador;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.radiador = new Radiador();
   }

  ngOnInit() {
    this.radiador = <Radiador>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "radiador", this.s_id);
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
