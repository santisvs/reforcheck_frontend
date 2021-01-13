import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Estancia } from 'src/app/models/estancia';
import { Ventana } from 'src/app/models/estancia/ventana';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.page.html',
  styleUrls: ['./ventana.page.scss'],
})
export class VentanaPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: number;

  public ventana: Ventana;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.ventana = new Ventana();
  }

  ngOnInit() {
    this.ventana = <Ventana>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "ventana", this.s_id);
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }
}
