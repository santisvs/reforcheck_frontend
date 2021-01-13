import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ducha } from 'src/app/models/estancia/ducha';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-ducha',
  templateUrl: './ducha.page.html',
  styleUrls: ['./ducha.page.scss'],
})
export class DuchaPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: string;

  public ducha: Ducha;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.ducha = new Ducha();
   }

  ngOnInit() {
    this.ducha = <Ducha>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "ducha", this.s_id);
  }

  crearTramo(){
    this.presupuestoService.crearTramo(this.s_planta, this.s_estancia, this.s_id, "ducha");
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
