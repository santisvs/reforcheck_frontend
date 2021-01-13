import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MobiliarioObra } from 'src/app/models/estancia/mobiliario-obra';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-mobiliario-obra',
  templateUrl: './mobiliario-obra.page.html',
  styleUrls: ['./mobiliario-obra.page.scss'],
})
export class MobiliarioObraPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;

  public mobiliario_obra: MobiliarioObra;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.mobiliario_obra = new MobiliarioObra();
  }

  ngOnInit() {
    this.mobiliario_obra = <MobiliarioObra>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "mobiliario_obra", "");
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
