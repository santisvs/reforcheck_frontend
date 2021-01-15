import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Planta } from 'src/app/models/planta';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
import { EditarPage } from '../../elementos/editar/editar.page';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.page.html',
  styleUrls: ['./planta.page.scss'],
})
export class PlantaPage implements OnInit {

  public planta : Planta;
  public idPropiedad: string;
  public idPlanta: string;

  constructor(
    private modalCtrl: ModalController,
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
     
    console.log("PLANTA");
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
    });

    this.planta = this.presupuestoService.getPlantaById(this.idPropiedad, this.idPlanta);
  }

  addEstancia(){
    this.presupuestoService.crearEstanciaInPlantaInPropiedad(this.idPropiedad,this.idPlanta);
  }

  async editPlanta(){
    const modal = await this.modalCtrl.create({
      component: EditarPage,
      componentProps: {
        s_idPropiedad: this.idPropiedad,
        s_idPlanta: this.idPlanta,
        s_idEstancia: "",
        s_tipo: "planta"
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

}
