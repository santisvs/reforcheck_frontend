import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Estancia } from 'src/app/models/estancia';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
import { CrearPage } from '../../elementos/crear/crear.page';
import { EditarPage } from '../../elementos/editar/editar.page';

@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.page.html',
  styleUrls: ['./estancia.page.scss'],
})
export class EstanciaPage implements OnInit {
  public estancia : Estancia;
  public idPropiedad: string;
  public idPlanta: string;
  public idEstancia: string;

  constructor(
    private modalCtrl: ModalController,
    private presupuestoService: PresupuestoService,
    private rutaActiva: ActivatedRoute
  ) {
    console.log("ESTANCIA");
  }

  ngOnInit() {
    this.rutaActiva.paramMap.subscribe( params => {
      this.idPropiedad = params.get('id1');
      this.idPlanta = params.get('id2');
      this.idEstancia = params.get('id3');
    });

    this.estancia = this.presupuestoService.getEstanciaById(this.idPropiedad, this.idPlanta, this.idEstancia);
  }

  async addElementos(){
    const modal = await this.modalCtrl.create({
      component: CrearPage,
      componentProps: {
        s_idPropiedad: this.idPropiedad,
        s_idPlanta: this.idPlanta,
        s_idEstancia: this.idEstancia
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async editEstancia(){
    const modal = await this.modalCtrl.create({
      component: EditarPage,
      componentProps: {
        s_idPropiedad: this.idPropiedad,
        s_idPlanta: this.idPlanta,
        s_idEstancia: this.idEstancia,
        s_tipo: "estancia"
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }
}
