import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Estancia } from 'src/app/models/estancia';
import { Planta } from 'src/app/models/planta';
import { Propiedad } from 'src/app/models/propiedad';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  @Input() s_idPropiedad: string;
  @Input() s_idPlanta: string;
  @Input() s_idEstancia: string;
  @Input() s_tipo: string;

  public estancia: Estancia;
  public planta: Planta;
  public propiedad: Propiedad;
  public tipo: string;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    if(this.s_tipo == "propiedad"){
        this.propiedad = new Propiedad();
    } else if(this.s_tipo == "planta"){
        this.planta = new Planta();
    } else if(this.s_tipo == "estancia"){
        this.estancia = new Estancia();
    }
    this.tipo = this.s_tipo;
  }

  ngOnInit() {
    if(this.s_tipo == "propiedad"){
        this.propiedad = <Propiedad>this.presupuestoService.getPropiedadById(this.s_idPropiedad);
    } else if(this.s_tipo == "planta"){
        this.planta = <Planta>this.presupuestoService.getPlantaById(this.s_idPropiedad, this.s_idPlanta);
    } else if(this.s_tipo == "estancia"){
        this.estancia = <Estancia>this.presupuestoService.getEstanciaById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia);
    }
  }

  cerrarModal(){
    console.log(this.estancia);
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
