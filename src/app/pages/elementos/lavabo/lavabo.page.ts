import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Lavabo } from 'src/app/models/estancia/lavabo';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-lavabo',
  templateUrl: './lavabo.page.html',
  styleUrls: ['./lavabo.page.scss'],
})
export class LavaboPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: number;

  public lavabo: Lavabo;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.lavabo = new Lavabo();
   }

  ngOnInit() {
    this.lavabo = <Lavabo>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "lavabo", this.s_id);
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
