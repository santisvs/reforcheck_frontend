import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Bidet } from 'src/app/models/estancia/bidet';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-bidet',
  templateUrl: './bidet.page.html',
  styleUrls: ['./bidet.page.scss'],
})
export class BidetPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: number;

  public bidet: Bidet;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.bidet = new Bidet();
   }

  ngOnInit() {
    this.bidet = <Bidet>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "bidet", this.s_id);
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
