import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/propiedad';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditarPage } from '../../elementos/editar/editar.page';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.page.html',
  styleUrls: ['./propiedad.page.scss'],
})
export class PropiedadPage implements OnInit {

  public propiedad : Propiedad;
  public idPropiedad: string;

  constructor(
    private modalCtrl: ModalController,
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
    });
    this.propiedad = this.presupuestoService.getPropiedadById(this.idPropiedad);
    console.log(this.propiedad);
  }

  addPlanta(){
    this.presupuestoService.crearPlantaInPropiedad(this.idPropiedad);
  }

  async editPropiedad(){
    const modal = await this.modalCtrl.create({
      component: EditarPage,
      componentProps: {
        s_idPropiedad: this.idPropiedad,
        s_idPlanta: "",
        s_idEstancia: "",
        s_tipo: "propiedad"
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

}
