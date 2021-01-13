import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Inodoro } from 'src/app/models/estancia/inodoro';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-inodoro',
  templateUrl: './inodoro.page.html',
  styleUrls: ['./inodoro.page.scss'],
})
export class InodoroPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: number;

  public inodoro: Inodoro;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.inodoro = new Inodoro();
   }

  ngOnInit() {
    this.inodoro = <Inodoro>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "inodoro", this.s_id);
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
