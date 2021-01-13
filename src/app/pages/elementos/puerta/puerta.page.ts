import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Estancia } from 'src/app/models/estancia';
import { Puerta } from 'src/app/models/estancia/puerta';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-puerta',
  templateUrl: './puerta.page.html',
  styleUrls: ['./puerta.page.scss'],
})
export class PuertaPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: number;

  public puerta: Puerta;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.puerta = new Puerta();
   }

  ngOnInit() {
    this.puerta = <Puerta>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "puerta", this.s_id);
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
