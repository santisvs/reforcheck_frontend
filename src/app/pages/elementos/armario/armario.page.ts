import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Estancia } from 'src/app/models/estancia';
import { Armario } from 'src/app/models/estancia/armario';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-armario',
  templateUrl: './armario.page.html',
  styleUrls: ['./armario.page.scss'],
})
export class ArmarioPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: number;

  public armario: Armario;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.armario = new Armario();
   }

  ngOnInit() {
    this.armario = <Armario>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "armario", this.s_id);
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
