import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Banera } from 'src/app/models/estancia/banera';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-banera',
  templateUrl: './banera.page.html',
  styleUrls: ['./banera.page.scss'],
})
export class BaneraPage implements OnInit {

  @Input() s_planta: number;
  @Input() s_estancia: number;
  @Input() s_id: string;

  public banera: Banera;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.banera = new Banera();
   }

  ngOnInit() {
    this.banera = <Banera>this.presupuestoService.getElemento(this.s_planta, this.s_estancia, "banera", this.s_id);
  }

  crearTramo(){
    this.presupuestoService.crearTramo(this.s_planta, this.s_estancia, this.s_id, "banera");
  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }
}
